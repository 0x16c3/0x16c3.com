import React from 'react';

import Link from 'next/link';
import BLOG from '@/../blog.config';

import Image from 'next/image';

import { NotionRenderer } from 'react-notion-x';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';

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
                Equation,
                Code,
                Collection: () => {
                  return <></>;
                },
                Image,
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
