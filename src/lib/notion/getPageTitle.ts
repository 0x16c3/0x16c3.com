import { Block, ExtendedRecordMap, Decoration } from 'notion-types';

// added these because there was some sort of import error with the react-notion-x package

function getBlockCollectionId(block: Block, recordMap: ExtendedRecordMap): string | null {
  const collectionId = (block as any).collection_id || (block as any).format?.collection_pointer?.id;

  if (collectionId) {
    return collectionId;
  }

  const collectionViewId = (block as any)?.view_ids?.[0];
  if (collectionViewId) {
    const collectionView = recordMap.collection_view?.[collectionViewId]?.value;
    if (collectionView) {
      const collectionId = collectionView.format?.collection_pointer?.id;
      return collectionId;
    }
  }

  return null;
}

const getTextContent = (text?: Decoration[]): string => {
  if (!text) {
    return ``;
  } else if (Array.isArray(text)) {
    return text?.reduce((prev, current) => prev + (current[0] !== `⁍` && current[0] !== `‣` ? current[0] : ``), ``) ?? ``;
  } else {
    return text;
  }
};

function getBlockTitle(block: Block, recordMap: ExtendedRecordMap) {
  if (block.properties?.title) {
    return getTextContent(block.properties.title);
  }

  if (block.type === `collection_view_page` || block.type === `collection_view`) {
    const collectionId = getBlockCollectionId(block, recordMap);

    if (collectionId) {
      const collection = recordMap.collection[collectionId]?.value;

      if (collection) {
        return getTextContent(collection.name);
      }
    }
  }

  return ``;
}

export function getPageTitle(recordMap: ExtendedRecordMap) {
  const pageBlock = recordMap.block[Object.keys(recordMap.block)[0]]?.value;

  if (pageBlock) {
    return getBlockTitle(pageBlock, recordMap);
  }

  return null;
}
