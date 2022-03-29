import { GetStaticProps } from 'next';
import { Post, TagObj } from '@types';

import { filterPublishedPosts, getAllPosts, getAllTags } from 'lib/notion';

import { PageContainer } from '@components/pages/PageContainer';

import { ComponentSectionAbout } from '@components/layout/sectionAbout/sectionAbout';
import { ComponentSectionProjects } from '@components/layout/sectionProjects/sectionProjects';

export default function Home({ posts, tags, blockMap }: { posts: Post[]; tags: TagObj; post: Post | null; blockMap: any }) {
  return (
    <PageContainer title="Portfolio">
      <ComponentSectionAbout />
      <ComponentSectionProjects posts={posts} />
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts({ includePages: true });
  const posts = filterPublishedPosts({
    posts: allPosts,
    includePages: false,
  });
  const allBlockMaps = new Set<any>();
  const tags = getAllTags({ posts });

  return {
    props: {
      posts,
      tags,
    },
    revalidate: 1,
  };
};
