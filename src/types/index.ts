// components

export type PropsComponentButton = {
  type?: string | undefined;
  onClick?: () => void | undefined;
  link?: string | undefined;
};

// pages

export type PropsPageContainer = {
  title?: string | undefined;
  layout?: string | undefined;
};

// notion

export type PostType = 'Post' | 'Page';

export type PostStatus = 'Idea' | 'Published' | 'Revise' | 'Published';

export type Post = {
  id: string;
  createdTime: string;
  fullWidth: boolean;
  title?: string;
  slug?: string;
  outer_link?: string;
  summary?: string;
  tags?: string[];
  date: {
    start_date?: string;
  };
  status?: [PostStatus];
  type?: [PostType];
  blockMap: any;
};

export type PublicPage = {
  title: string;
  pageId: string;
  slug: string;
};

export type TagObj = { [key: string]: number };

export type BlogConfig = {
  title: string;
  author: string;
  email: string;
  description: string;
  lang: 'en-US';
  link: string;

  path: string;
  since: number;
  postsPerPage: number;
  sortByDate: boolean;
  showAbout: boolean;
  showArchive: boolean;

  seo: {
    keywords: string[];
  };

  notionPageId: string;
  notionAccessToken: string;

  isProd: boolean;
};
