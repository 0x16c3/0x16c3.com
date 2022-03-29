import { NextPage } from 'next';
import Head from 'next/head';

import { PropsPageContainer } from '@types';
import { StyledPageContainer, StyledPageContent } from '@components/pages/PageContainerStyles';

import { ComponentHeader } from '@components/layout/header/header';

export const PageContainer: NextPage<PropsPageContainer> = ({ children, ...props }) => {
  const pageTitle = `0x16c3` + (props.title ? ` - ${props.title}` : ``);
  const pageLayout: any = `${props.layout || `normal`}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <StyledPageContainer>
        <ComponentHeader />

        <StyledPageContent layout={pageLayout}>
          {/* page content */}
          {children}
        </StyledPageContent>
      </StyledPageContainer>
    </>
  );
};
