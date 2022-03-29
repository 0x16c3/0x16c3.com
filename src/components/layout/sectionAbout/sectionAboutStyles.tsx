import { styled } from '@/styles/stitches.config';

const StyledSectionContainerAboutMain = styled(`div`, {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,

  width: `100vw`,

  backgroundColor: `$mainWhite`,
});

const StyledSectionContainerAbout = styled(`div`, {
  'display': `flex`,
  'flexDirection': `row`,
  'justifyContent': `space-between`,
  'flexWrap': `wrap`,

  'width': `100%`,

  '@bp3': {
    width: `auto`,
  },

  'maxWidth': 1000,

  'margin': `0 auto`,
  'padding': `0 32px 0 32px`,

  'fontSize': `1.35rem`,
});

const StyledSectionContentAbout = styled(`div`, {
  display: `flex`,
  textAlign: `left`,
  marginBottom: 50,
  flexDirection: `column`,
  flexWrap: `wrap`,

  width: `100%`,
  maxWidth: 500,

  h1: {
    fontFamily: `$fontInter`,
    fontWeight: `$fontWeightBlack`,
    fontSize: `1.4rem`,
  },

  textTransform: `uppercase`,
});

const StyledSectionContentLinks = styled(`div`, {
  'display': `flex`,
  'flexDirection': `column`,
  'justifyContent': `center`,

  '@bp3': {
    width: `100%`,
    marginBottom: `8px`,
  },

  'textAlign': `right`,
  'alignItems': `right`,

  'a': {
    margin: `5px 0 5px 0`,

    fontSize: `1.35rem`,
    position: `relative`,
    textDecoration: `none`,
    color: `#000`,

    textTransform: `uppercase`,
  },

  'a:hover': {
    color: `#000`,
  },

  'a:after': {
    marginLeft: `1rem`,
    display: `inline-block`,
    content: `→`,
    transform: `translateX(0)`,
    transition: `transform 0.3s ease`,
  },

  'a:hover:after': {
    transform: `translateX(3px)`,
  },
});

export {
  //
  StyledSectionContainerAboutMain,
  StyledSectionContainerAbout,
  StyledSectionContentAbout,
  StyledSectionContentLinks,
};
