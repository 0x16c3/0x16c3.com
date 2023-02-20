import * as React from 'react';
import { GetStaticProps } from 'next';

import Image from 'next/image';

import { getNotionPage, getPageTitle } from 'lib/notion';
import { NotionRenderer } from 'react-notion-x';

export default function NotionPage({ page, title }: { page: any; title: string }) {
  React.useEffect(() => {
    if (!title) return;
    document.title = `0x16c3 — ${title}`;
  }, [title]);

  if (!page || !title) {
    return <div className="loading-page">Fetching page...</div>;
  }

  return <NotionRenderer recordMap={page} fullPage={true} disableHeader={true} components={{ nextImage: Image }} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.pageId as string;
  const page = await getNotionPage({ id: pageId });
  const title = getPageTitle(page);

  return {
    props: {
      page,
      title,
    },
    revalidate: 1,
  };
};
