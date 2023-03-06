import BLOG from '../../../blog.config';
import { Post, PublicPage } from 'types';

import { NotionAPI } from 'notion-client';
import { getTextContent, getDateValue } from 'notion-utils';

import { GetPostsParams } from './getPosts';

const excludeProperties = [`date`, `select`, `multi_select`, `person`];

export const getPostProperties = async (id: string, block: GetPostsParams['block'], schema: GetPostsParams['schema']): Promise<Post> => {
  const authToken = BLOG.notionAccessToken;
  const api = new NotionAPI({ authToken });
  const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
  const properties: Record<string, Post[keyof Post]> = {};
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i];
    properties.id = id;
    const currentPostKey = schema[key]?.name as keyof Post | undefined;
    if (currentPostKey && schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[currentPostKey] = getTextContent(val as Parameters<typeof getTextContent>[0]);
    } else {
      switch (schema[key]?.type) {
        case `date`: {
          const dateProperty = getDateValue(val as Parameters<typeof getDateValue>[0]);
          const tmpDateProperty: Partial<typeof dateProperty> = dateProperty;
          if (tmpDateProperty && currentPostKey) {
            delete tmpDateProperty.type;
            properties[currentPostKey] = tmpDateProperty;
          }
          break;
        }
        case `select`:
        case `multi_select`: {
          const selects = getTextContent(val as Parameters<typeof getTextContent>[0]);
          if (selects[0]?.length && currentPostKey) {
            properties[currentPostKey] = selects.split(`,`);
          }
          break;
        }
        // NOTE: Not using it?
        case `person`: {
          const rawUsers = (val as string[][]).flat();
          const users = [];
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0];
              const res = await api.getUsers([userId]);
              const resValue = res?.results?.[0];
              const user = {
                id: resValue?.id,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo,
              };
              users.push(user);
            }
          }
          // properties[schema[key].name] = users
          break;
        }
        default:
          break;
      }
    }
  }
  return properties as Post;
};

export const getPublicPageProperties = async (id: string, block: GetPostsParams['block'], schema: GetPostsParams['schema']): Promise<PublicPage> => {
  const authToken = BLOG.notionAccessToken;
  const api = new NotionAPI({ authToken });
  const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
  const properties: Record<string, PublicPage[keyof PublicPage]> = {};
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i];
    properties.id = id;
    const currentPostKey = schema[key]?.name as keyof PublicPage | undefined;
    if (currentPostKey && schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[currentPostKey] = getTextContent(val as Parameters<typeof getTextContent>[0]);
    }
  }
  return properties as PublicPage;
};
