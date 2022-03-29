import { styled } from '@/styles/stitches.config';

const StyledButtonBase = styled(`button`, {
  'backgroundColor': `$mainWhite`,
  'color': `$mainBlack`,
  'transition': `all 300ms ease-in-out`,

  'user-select': `none`,

  'height': `40px`,
  'width': `fit-content`,
  'minWidth': `fit-content`,
  'borderRadius': `20px`,
  'border': `none`,

  'padding': `5px 5px`,
  'margin': `0px 5px`,

  'textTransform': `uppercase`,
  'fontWeight': `$fontWeightLight`,

  '*': {
    textDecoration: `none`,
    color: `currentColor`,
  },

  '&:hover': {
    'cursor': `pointer`,

    '& > div': {
      backgroundColor: `$accentPurple2`,
    },
  },

  'variants': {
    type: {
      primary: {},
      secondary: {},
    },
  },
});

const StyledButtonBaseContent = styled(`div`, {
  transition: `all 300ms ease-in-out`,

  height: `100%`,
  width: `fit-content`,

  borderRadius: `15px`,
  padding: `0 10px`,

  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

const StyledButtonBaseContentInner = styled(`div`, {});

export {
  //
  StyledButtonBase,
  StyledButtonBaseContent,
  StyledButtonBaseContentInner,
};
