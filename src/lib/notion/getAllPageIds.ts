import { idToUuid } from 'notion-utils';
import { GetPostsParams } from './getPosts';

export const getAllPageIds = (collectionQuery: GetPostsParams['collectionQuery'], viewId?: string): string[] => {
  const views = Object.values(collectionQuery)?.[0];

  let pageIds = [];

  if (viewId) {
    const vId = idToUuid(viewId);
    pageIds = views[vId]?.blockIds;
  } else if (views) {
    const pageSet = new Set<string>();

    Object.values(views).forEach((view) => {
      (view as any).collection_group_results.blockIds?.forEach((id: string) => pageSet.add(id));
    });
    pageIds = Array.from(pageSet);
  } else {
    return [];
  }
  return pageIds;
};
