import { styled } from '@/styles/stitches.config';

const StyledSectionContainerProjectsMain = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,

  width: `100vw`,

  backgroundColor: `#FFFFFF`,
});

const StyledSectionContainerProjects = styled(`div`, {
  textAlign: `left`,
  padding: `0 32px 20rem 32px`,

  margin: `4rem auto 0 auto`,

  width: `100%`,
  maxWidth: 1000,

  h1: {
    fontFamily: `$fontInter`,
    fontWeight: `$fontWeightBlack`,
    fontSize: `1.4rem`,
  },
});

const StyledSectionContentProjects = styled(`div`, {
  '@bp3': {
    'padding-right': `64px`,
  },
});

export {
  //
  StyledSectionContainerProjectsMain,
  StyledSectionContainerProjects,
  StyledSectionContentProjects,
};
