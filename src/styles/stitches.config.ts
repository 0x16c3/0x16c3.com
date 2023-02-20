import { createStitches } from '@stitches/react';
// import type * as Stitches from '@stitches/react';

import { StyledGlobalNotion } from './GlobalNotionStyles';

export const getDefaultTheme = () => ({
  colors: {
    mainBlack: `#0D0D0D`,
    mainDark1: `#121212`,
    mainDark2: `#1C1C1C`,
    mainDark3: `#666666`,

    mainWhite: `#FCFCFC`,
    mainLight1: `#EDEDED`,
    mainLight2: `#A8A8A8`,
    mainLight3: `#B5B5B5`,

    accentPurple1: `#7928CA`,
    accentPurple2: `#D8CCF1`,
  },
  space: {},
  fontSizes: {},
  fonts: {
    fontSystemSans: `-apple-system, BlinkMacSystemFont, 'Inter var', 'Inter', 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, Roboto, Ubuntu, sans-serif`,
    fontMono: `JetBrains Mono, 'SFMono-Regular', 'Jetbrains Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', 'Lucida Console', monospace`,
    fontInter: `Inter`,
  },
  fontWeights: {
    fontWeightLight: 300,
    fontWeightNormal: 400,
    fontWeightSemiBold: 500,
    fontWeightBold: 600,
    fontWeightBlack: 700,
  },
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {
    shadowDefault: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
  },
  zIndices: {},
  transitions: {},
});

export const {
  // stitches
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: getDefaultTheme(),
  media: {
    bp1: `(max-width: 640px)`,
    bp2: `(max-width: 768px)`,
    bp3: `(max-width: 1024px)`,
  },
  utils: {},
  prefix: ``,
});

export const globalStyles = globalCss({
  '@import': [
    // imports
    `https://cdn.jsdelivr.net/npm/normalize.css/normalize.min.css`,
    `https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;800&family=JetBrains+Mono:wght@300;500&display=swap`,
  ],
  'html': {
    fontSize: `10px`,
    //'user-select': `none`,
  },

  'html, body': {
    position: `relative`,

    backgroundColor: `$mainLight1`,
    color: `$mainBlack`,
    margin: 0,
    padding: 0,
    width: `100vw`,
    height: `100vh`,

    overflowX: `hidden`,
    // overflow: `hidden`,
    // userSelect: `none`,
  },

  'body': {
    fontFamily: `$fontMono`,
    fontWeight: `$fontWeightLight`,
  },

  'a': {
    'transition': `0.3s`,

    '&, :visited': {
      color: `$accentPurple1`,
      textDecoration: `none`,
    },
    '&:hover': {
      color: `$accentPurple2`,
    },
  },

  '.loading-page': {
    // centered text on loading page
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100vh`,
  },

  ...StyledGlobalNotion,

  '*': {
    fontFamily: `$fontMono`,
  },
});
