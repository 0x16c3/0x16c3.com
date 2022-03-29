import { styled } from '@/styles/stitches.config';

const StyledProjectItemContainer = styled(`div`, {
  'border-top': `1px solid $mainWhite`,
  'border-bottom': `1px solid #00000000`,
  'margin': 0,

  'transition': `all 200ms ease-in-out`,

  '&:hover h2': {
    color: `$accentPurple1`,
    transition: `200ms ease-in-out`,
  },

  '&:hover h2:before': {
    opacity: 1,
  },

  '&.is-active h2:before': {
    opacity: 1,
  },

  '&:hover div': {
    color: `$mainBlack`,
    transition: `200ms ease-in-out`,
  },

  '&:hover': {
    borderTop: `1px solid $mainDark3`,
    borderBottom: `1px solid $mainDark3`,
    transition: `200ms ease-in-out`,
  },

  '&.is-active': {
    borderTop: `1px solid $mainDark3`,
    borderBottom: `1px solid $mainDark3`,
    backgroundColor: `$mainWhite`,
    opacity: 1,
  },
});

const StyledProjectItemInfo = styled(`div`, {
  'textTransform': `uppercase`,
  'padding': `2rem 2rem`,

  '&:hover': {
    cursor: `pointer`,
    backgroundColor: `$mainWhite`,
  },

  '.is-active &': {
    backgroundColor: `$mainWhite`,
  },
});

const StyledProjectItemInfoTitle = styled(`h2`, {
  'position': `relative`,

  'fontSize': `2.5rem`,
  'fontWeight': `$fontWeightSemiBold`,
  'backgroundColor': `$mainWhite`,
  'margin': 0,
  'padding': `10px`,

  'color': `$mainDark3`,

  'transition': `all 200ms ease-in-out`,

  '.is-active &': {
    color: `$accentPurple1`,
  },

  '&:before': {
    content: ` `,
    position: `absolute`,
    width: `5px`,
    height: `100%`,
    backgroundColor: `$mainBlack`,
    transform: `translate(-30px, -10px)`,
    opacity: 0,

    transition: `opacity 200ms ease-in-out`,
  },
});

const StyledProjectItemInfoDetails = styled(`div`, {
  'width': `100%`,
  'display': `flex`,
  'flexDirection': `row`,
  'margin': `2rem 0`,
  'color': `$mainLight3`,

  'fontSize': `1.2rem`,

  'transition': `all 200ms ease-in-out`,

  '.is-active &': {
    color: `$mainBlack`,
    transition: `color 0.3s`,
  },

  '& > div': {
    '&:last-child': {
      'textAlign': `right`,
      '*': {
        float: `right`,
      },
    },

    '& > span': {
      '&:not(:last-child)': {
        marginRight: `10px`,
      },
    },

    // info items in flexbox
    'flex': 1,

    '&:nth-child(1)': {
      flex: 2,
    },
    '&:nth-child(2)': {
      flex: 3,
    },
    '&:nth-child(3), &:nth-child(4)': {
      flex: 1,
    },

    // media breakpoint
    '@bp1': {
      '&:nth-child(2)': {
        display: `none`,
      },
    },
  },
});

const StyledProjectItemInfoDetailsPointer = styled(`div`, {
  width: 2,
  height: 4,
  backgroundColor: `$mainBlack`,
});

const StyledProjectItemContent = styled(`div`, {
  'overflow': `hidden`,
  'maxHeight': `0px`,

  'transition': `all 0s !important`,

  '.is-active &': {
    maxHeight: `9999px`,
    padding: `2rem 0 8rem 0`,

    transition: `200ms ease-in-out !important`,
  },
});

export {
  //
  StyledProjectItemContainer,
  StyledProjectItemInfo,
  StyledProjectItemInfoTitle,
  StyledProjectItemInfoDetails,
  StyledProjectItemInfoDetailsPointer,
  StyledProjectItemContent,
};
