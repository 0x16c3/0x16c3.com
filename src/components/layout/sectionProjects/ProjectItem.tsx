import React from 'react';

import Link from 'next/link';
import BLOG from '@/../blog.config';

import Image from 'next/image';

import { NotionRenderer, Equation, Code, Collection } from 'react-notion-x';

import {
  // styles
  StyledProjectItemContainer,
  StyledProjectItemInfo,
  StyledProjectItemInfoTitle,
  StyledProjectItemInfoDetails,
  StyledProjectItemInfoDetailsPointer,
  StyledProjectItemContent,
} from '@components/layout/sectionProjects/ProjectItemStyles';

type DivProps = JSX.IntrinsicElements['div'];

export const ProjectItem = ({ post, isActive, ...rootDOMAttributes }: { post: any; isActive: boolean } & DivProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const projectTitle: string = post.title;
  const projectTags: string[] = Array.from(post.tags);
  const projectCategory: string = post.category;
  const projectExternalLink: string = post.link;

  const projectDate: Date = new Date(post.date.start_date);
  const projectYear: string = projectDate.getFullYear().toString();

  React.useEffect(() => {
    if (isActive) {
      ref.current?.scrollIntoView({ behavior: `auto`, block: `start` });
    }
  }, [isActive]);

  const projectInfo = () => {
    return (
      <div {...rootDOMAttributes} ref={ref}>
        <StyledProjectItemInfo>
          {/* project title */}
          <StyledProjectItemInfoTitle>{projectTitle}</StyledProjectItemInfoTitle>

          {/* detail pointers */}
          <StyledProjectItemInfoDetails>
            {[...Array(4)].map((tag, index) => {
              return (
                <div key={index}>
                  <StyledProjectItemInfoDetailsPointer></StyledProjectItemInfoDetailsPointer>
                </div>
              );
            })}
          </StyledProjectItemInfoDetails>

          {/* detail text content */}
          <StyledProjectItemInfoDetails>
            <div>{projectCategory}</div>
            <div>
              {projectTags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
            </div>
            <div>{projectYear}</div>
            <div>
              <Link href={projectExternalLink}>
                <a target="_blank">LINK &#8599;</a>
              </Link>
            </div>
          </StyledProjectItemInfoDetails>
        </StyledProjectItemInfo>
      </div>
    );
  };

  const projectContent = () => {
    return (
      <>
        {post.blockMap && (
          <StyledProjectItemContent>
            <NotionRenderer
              recordMap={post.blockMap}
              components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: () => {
                  return <></>;
                },
                image: Image,
              }}
            />
          </StyledProjectItemContent>
        )}
      </>
    );
  };

  return (
    <StyledProjectItemContainer data-post-id={post.id} className={`${isActive ? `is-active` : ``}`}>
      {projectInfo()}
      {projectContent()}
    </StyledProjectItemContainer>
  );
};
