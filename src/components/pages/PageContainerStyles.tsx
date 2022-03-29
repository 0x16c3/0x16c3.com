import { styled } from '@/styles/stitches.config';

export const StyledPageContainer = styled(`div`, {
  textAlign: `center`,
  alignContent: `center`,
  alignItems: `center`,

  display: `flex`,
  flexDirection: `column`,

  width: `100vw`,
  maxWidth: `100%`,

  margin: `0 auto`,

  backgroundColor: `$mainWhite`,
});

export const StyledPageContent = styled(`div`, {
  margin: `0 20px`,

  variants: {
    layout: {
      normal: {
        position: `relative`,
        display: `flex`,
        flexDirection: `column`,
      },
    },
  },
});
