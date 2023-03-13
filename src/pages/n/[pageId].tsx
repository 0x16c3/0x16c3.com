import * as React from 'react';
import { GetStaticProps } from 'next';

import Image from 'next/image';

import { Code } from '@/components/atomic/Code';
import { getNotionPage, getPageTitle, getPages } from 'lib/notion';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

export default function NotionPage({ page, title }: { page: any; title: string }) {
  React.useEffect(() => {
    if (!title) return;
    document.title = `0x16c3 — ${title}`;
  }, [title]);

  if (!page || !title) {
    return <div className="loading-page">Fetching page...</div>;
  }

  return <NotionRenderer recordMap={page} fullPage={true} disableHeader={true} components={{ nextImage: Image, Code }} />;
}

export async function getStaticPaths() {
  const pages = await getPages({});
  const arrPaths = [];
  for (const page of pages) {
    arrPaths.push(page.pageId);
    arrPaths.push(page.slug);
  }

  return {
    paths: arrPaths.map((pageId) => ({ params: { pageId } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.pageId as string;

  let page: ExtendedRecordMap;
  let title: string | null;

  try {
    page = await getNotionPage({ id: pageId });
    title = getPageTitle(page);
  } catch (err) {
    const pages = await getPages({});
    const id = pages.find((page) => page.pageId === pageId || page.slug === pageId);

    if (!id) console.error(err);

    page = await getNotionPage({ id: id?.pageId as string });
    title = getPageTitle(page);

    if (!page) {
      console.error(err);
    }
  }

  return {
    props: {
      page,
      title,
    },
    revalidate: 1,
  };
};
