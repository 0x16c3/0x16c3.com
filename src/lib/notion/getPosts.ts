import BLOG from '../../../blog.config';
import { Post, PublicPage } from 'types';
import { NotionAPI } from 'notion-client';
import { idToUuid } from 'notion-utils';

import { BasePageBlock } from 'notion-types/build/block';
import { Collection } from 'notion-types/build/collection';
import { ExtendedRecordMap } from 'notion-types/build/maps';

import { filterPublishedPosts } from './filterPublishedPosts';
import { getAllPageIds } from './getAllPageIds';
import { getPostProperties, getPublicPageProperties } from './getPageProperties';
import { getPostBlocks } from '.';

export type GetPostsParams = {
  id: string;
  includedPages: boolean;
  rawMetadata: BasePageBlock;
  collectionQuery: ExtendedRecordMap['collection_query'];
  block: ExtendedRecordMap['block'];
  schema: Collection['schema'];
};

export async function getPosts({ id, includePages = false }: { id?: string; includePages: boolean }): Promise<Post[]> {
  id = BLOG.notionPageId;
  if (typeof id !== `string`) {
    console.log(`pageId "${id}" is not a string`);
    return [];
  }

  const authToken = BLOG.notionAccessToken;
  const api = new NotionAPI({ authToken });
  const response = await api.getPage(id);

  id = idToUuid(id);

  const collection = Object.values(response.collection)[0]?.value;
  const collectionQuery = response.collection_query;
  const block = response.block;
  const schema = collection?.schema;

  const rawMetadata = block[id].value as BasePageBlock;

  // Check Type
  if (rawMetadata?.type !== `collection_view_page` && rawMetadata?.type !== `collection_view`) {
    console.log(`pageId "${id}" is not a database`);
    return [];
  } else {
    // Construct Data
    const pageIds = getAllPageIds(collectionQuery);
    const data = [];

    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i];
      const properties = (await getPostProperties(id, block, schema)) || null;

      // Add fullwidth, createdtime to properties
      properties.createdTime = new Date(block[id].value?.created_time).toString();
      properties.fullWidth = (block[id].value?.format as BasePageBlock['format'])?.page_full_width ?? false;

      data.push(properties);
    }

    // remove all the the items doesn't meet requirements
    const posts = filterPublishedPosts({ posts: data, includePages });

    // Sort by date
    if (BLOG.sortByDate) {
      posts.sort((a, b) => {
        const dateA = new Date(a?.date?.start_date || a.createdTime);
        const dateB = new Date(b?.date?.start_date || b.createdTime);
        return dateB.getTime() - dateA.getTime();
      });
    }

    // Set blockMap for each post
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const blockMap = await getPostBlocks(post.id);
      post.blockMap = blockMap;
    }

    return posts;
  }
}

export async function getPages({ id }: { id?: string }): Promise<PublicPage[]> {
  id = BLOG.notionPublicPagesId;
  if (typeof id !== `string`) {
    console.log(`pageId "${id}" is not a string`);
    return [];
  }

  const authToken = BLOG.notionAccessToken;
  const api = new NotionAPI({ authToken });
  const response = await api.getPage(id);

  id = idToUuid(id);

  const collection = Object.values(response.collection)[0]?.value;
  const collectionQuery = response.collection_query;
  const block = response.block;
  const schema = collection?.schema;

  const rawMetadata = block[id].value as BasePageBlock;

  // Check Type
  if (rawMetadata?.type !== `collection_view_page` && rawMetadata?.type !== `collection_view`) {
    console.log(`pageId "${id}" is not a database`);
    return [];
  } else {
    // Construct Data
    const pageIds = getAllPageIds(collectionQuery);
    const data = [];

    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i];
      const properties = (await getPublicPageProperties(id, block, schema)) || null;
      data.push(properties);
    }

    return data;
  }
}

export async function getNotionPage({ id }: { id: string }): Promise<ExtendedRecordMap> {
  const authToken = BLOG.notionAccessToken;
  const api = new NotionAPI({ authToken });
  const recordMap = await api.getPage(id);
  return recordMap;
}
