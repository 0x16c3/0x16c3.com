import { styled } from '@/styles/stitches.config';

export const StyledHeaderContainerMain = styled(`header`, {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,

  width: `100vw`,
});

export const StyledHeaderContainer = styled(`div`, {
  'width': `100%`,
  'margin': `30px 0`,

  '@bp3': {
    'padding-left': `64px`,
  },

  'maxWidth': 1000,

  // 'textTransform': `uppercase`,
});

export const StyledHeaderContent = styled(`nav`, {
  margin: 0,
  display: `flex`,
});
