import React from 'react';

import { StyledSectionContainerProjectsMain, StyledSectionContainerProjects, StyledSectionContentProjects } from '@components/layout/sectionProjects/sectionProjectsStyles';

import { ProjectItem } from '@components/layout/sectionProjects/ProjectItem';
import { Post } from '@/types';

export const ComponentSectionProjects = ({ posts }: { posts: Post[] }) => {
  const [activePost, setActive] = React.useState<string>(``);

  const handleClick = (postId: string) => {
    if (activePost != postId) setActive(postId);
    else setActive(``);
  };

  return (
    <StyledSectionContainerProjectsMain>
      <StyledSectionContainerProjects>
        <StyledSectionContentProjects>
          <h1>PROJECTS</h1>

          {posts.map((post: Post) => (
            <ProjectItem key={post.id} post={post} isActive={activePost == post.id} onClick={() => handleClick(post.id)} />
          ))}
        </StyledSectionContentProjects>
      </StyledSectionContainerProjects>
    </StyledSectionContainerProjectsMain>
  );
};
