import { injectGlobal } from 'styled-components';

import simplonBoldEOT from '../../assets/fonts/simplon/simplonbp-bold-webfont.eot';
import simplonBoldWOFF from '../../assets/fonts/simplon/simplonbp-bold-webfont.woff';
import simplonBoldTTF from '../../assets/fonts/simplon/simplonbp-bold-webfont.ttf';
import simplonBoldSVG from '../../assets/fonts/simplon/simplonbp-bold-webfont.svg';
import simplonRegularEOT from '../../assets/fonts/simplon/simplonbp-regular-webfont.eot';
import simplonRegularWOFF from '../../assets/fonts/simplon/simplonbp-regular-webfont.woff';
import simplonRegularTTF from '../../assets/fonts/simplon/simplonbp-regular-webfont.ttf';
import simplonRegularSVG from '../../assets/fonts/simplon/simplonbp-regular-webfont.svg';
import simplonMediumEOT from '../../assets/fonts/simplon/simplonbp-medium-webfont.eot';
import simplonMediumWOFF from '../../assets/fonts/simplon/simplonbp-medium-webfont.woff';
import simplonMediumTTF from '../../assets/fonts/simplon/simplonbp-medium-webfont.ttf';
import simplonMediumSVG from '../../assets/fonts/simplon/simplonbp-medium-webfont.svg';
import simplonLightEOT from '../../assets/fonts/simplon/simplonbp-light-webfont.eot';
import simplonLightWOFF from '../../assets/fonts/simplon/simplonbp-light-webfont.woff';
import simplonLightTTF from '../../assets/fonts/simplon/simplonbp-light-webfont.ttf';
import simplonLightSVG from '../../assets/fonts/simplon/simplonbp-light-webfont.svg';
import simplonHeadlineEOT from '../../assets/fonts/simplon/simplonoi-headline-webfont.eot';
import simplonHeadlineWOFF from '../../assets/fonts/simplon/simplonoi-headline-webfont.woff';
import simplonHeadlineTTF from '../../assets/fonts/simplon/simplonoi-headline-webfont.ttf';
import simplonHeadlineSVG from '../../assets/fonts/simplon/simplonoi-headline-webfont.svg';

// BREAKPOINTS

export const DESKTOP_4K = '2560px';
export const DESKTOP_FULL_HD = '1920px';
export const DESKTOP_HD_TV = '1366px';
export const DESKTOP_HD = '1280px';
export const TABLET_HORIZONTAL = '1024px';
export const TABLET_VERTICAL = '768px';
export const MOBILE_MEDIUM = '600px';
export const MOBILE_DEFAULT = '320px';


// // FONTS
export const FONT_LIGHT = 'OiTextLight';
export const FONT_REGULAR = 'OiTextRegular';
export const FONT_MEDIUM = 'OiTextMedium';
export const FONT_BOLD = 'OiTextBold';
export const FONT_HEADLINE = 'OiTextHeadline';

export const H1_4K = '54px';
export const H1_NORMAL = '40px';
export const H1_MEDIUM = '30px';

export const H2_NORMAL = '24px';
export const H3_NORMAL = '18px';
export const H4_NORMAL = '16px';
export const H5_NORMAL = '14px';
export const H6_NORMAL = '12px';

// COLORS
export const COLOR_WHITE = '#FFFFFF';
export const COLOR_BLACK = '#222222';
export const COLOR_GREY = '#777777';
export const COLOR_GREY_LIGHT = '#dbdbdb';
export const COLOR_GREY_LIGHTER = '#f5f5f5';
export const COLOR_GREY_BLACK = '#909090';
export const COLOR_PURPLE = '#9F2AFF';
export const COLOR_PINK = '#D82482';
export const COLOR_YELLOW = '#ffd700';
export const COLOR_YELLOW_LIGHT = '#F6DA47';
export const COLOR_ORANGE = '#f8562c';
export const COLOR_GREEN = '#00d213';
export const COLOR_BLUE = '#00BAF7';

export const COLOR_HOVER_MENULIST_VERTICAL = '#f5f7fa';

// ANIMATE HOVER
export const ANIMATE_HOVER = 'transition: all 100ms ease-in-out; ';

// FADEIN
export const FADEIN = `
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

// MIXINS

// CONVERT TO REM
export const rem = (number) => {
  let tmp = number;
  tmp = (typeof (number) === 'string' && number.indexOf('px')) ? number.replace('px', '') : number;
  tmp = parseFloat(tmp);

  return `${tmp / 16}rem`; // Minimum to font
};

export const hexToRgb = (hex, alpha) => {
  hex.replace('#', '');
  const r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
  const g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
  const b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

// GRADIENTS
export function GRADIENT_HORIZONTAL_TEXT(colorLeft, colorRight) {
  return `
  background: -webkit-linear-gradient(to left, ${colorLeft}, ${colorRight});
  background: -o-linear-gradient(to right, ${colorLeft}, ${colorRight});
  background: -moz-linear-gradient(to right, ${colorLeft}, ${colorRight});
  background: linear-gradient(to right, ${colorLeft} , ${colorRight});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;
}

export function GRADIENT_HORIZONTAL(colorLeft, colorRight) {
  return `
  background: -webkit-linear-gradient(to left, ${colorLeft}, ${colorRight});
  background: -o-linear-gradient(to right, ${colorLeft}, ${colorRight});
  background: -moz-linear-gradient(to right, ${colorLeft}, ${colorRight});
  background: linear-gradient(to right, ${colorLeft} , ${colorRight});
  `;
}


//
// BUTTONS
export const BUTTONS = `
  border: none;
  text-transform: uppercase;
  color: ${COLOR_WHITE};
  font-family: ${FONT_HEADLINE};
  cursor: pointer;
  -moz-border-radius: ${rem(4)}; 
  -webkit-border-radius: ${rem(4)}; 
  border-radius: ${rem(4)};
`;

// SHADOW MARK
export const SHADOW_MARK = `
  -webkit-box-shadow: ${rem(2)} ${rem(10)} ${rem(30)} ${rem(0)} rgba(50, 50, 48, 0.17);
  -moz-box-shadow:    ${rem(2)} ${rem(10)} ${rem(30)} ${rem(0)} rgba(50, 50, 48, 0.17);
  box-shadow:         ${rem(2)} ${rem(10)} ${rem(30)} ${rem(0)} rgba(50, 50, 48, 0.17);
`;
export const SHADOW_BOX = `
  -webkit-box-shadow: ${rem(2)} ${rem(20)} ${rem(80)} ${rem(0)} rgba(50, 50, 48, 0.10);
  -moz-box-shadow:    ${rem(2)} ${rem(20)} ${rem(80)} ${rem(0)} rgba(50, 50, 48, 0.10);
  box-shadow:         ${rem(2)} ${rem(20)} ${rem(80)} ${rem(0)} rgba(50, 50, 48, 0.10);
`;
export const SHADOW_BOX_HOVER = `
  -webkit-box-shadow: ${rem(2)} ${rem(20)} ${rem(80)} ${rem(0)} rgba(50, 50, 48, 0.15);
  -moz-box-shadow:    ${rem(2)} ${rem(20)} ${rem(80)} ${rem(0)} rgba(50, 50, 48, 0.15);
  box-shadow:         ${rem(2)} ${rem(20)} ${rem(80)} ${rem(0)} rgba(50, 50, 48, 0.15);
`;
// RADIUS

export function RADIUS(border) {
  return `
  -moz-border-radius: ${rem(`${border}`)}; 
  -webkit-border-radius: ${rem(`${border}`)}; 
  border-radius: ${rem(`${border}`)};
  `;
}


// FIM MIXINS

const FontFace = (FONT_FACE, ONLINE_PATH) => {
  const output = {
    eot: ONLINE_PATH.eot,
    woff: ONLINE_PATH.woff,
    ttf: ONLINE_PATH.ttf,
    SVG: ONLINE_PATH.svg
  };

  return (`
    @font-face {
      font-family: '${FONT_FACE}';
      src: url(${output.eot});
      src:
      url(${`${output.eot}?#iefix`}) format('embedded-opentype'),
      url(${output.woff}) format('woff'),
      url(${output.ttf}) format('truetype'),
      url(${output.svg}) format('svg');
      font-weight: normal;
      font-style: normal;
    }
    `);
};


const globalStyles = injectGlobal`

/* menu header */

.header-body {
  font-family: ${FONT_REGULAR};
  a {
    font-family: ${FONT_REGULAR};

  .logo {
    font-family: ${FONT_HEADLINE};
    }
  }
  .coi-menu {
    .btn-menu {
      text-decoration: none;
    }
  }
}
.footers {
  font-family: ${FONT_REGULAR};
}

  ${
  FontFace(
    'OiTextLight',
    {
      eot: simplonLightEOT,
      woff: simplonLightWOFF,
      ttf: simplonLightTTF,
      svg: simplonLightSVG
    },
    {
      eot: '../../assets/fonts/simplon/simplonbp-light-webfont.eot',
      woff: '../../assets/fonts/simplon/simplonbp-light-webfont.woff',
      ttf: '../../assets/fonts/simplon/simplonbp-light-webfont.ttf',
      svg: '../../assets/fonts/simplon/simplonbp-light-webfont.svg'
    },
  )
}
  
  ${
  FontFace(
    'OiTextRegular',
    {
      eot: simplonRegularEOT,
      woff: simplonRegularWOFF,
      ttf: simplonRegularTTF,
      svg: simplonRegularSVG
    },
    {
      eot: '../../assets/fonts/simplon/simplonbp-regular-webfont.eot',
      woff: '../../assets/fonts/simplon/simplonbp-regular-webfont.woff',
      ttf: '../../assets/fonts/simplon/simplonbp-regular-webfont.ttf',
      svg: '../../assets/fonts/simplon/simplonbp-regular-webfont.svg'
    },
  )
}
  
  ${
  FontFace(
    'OiTextMedium',
    {
      eot: simplonMediumEOT,
      woff: simplonMediumWOFF,
      ttf: simplonMediumTTF,
      svg: simplonMediumSVG
    },
    {
      eot: '../../assets/fonts/simplon/simplonbp-medium-webfont.eot',
      woff: '../../assets/fonts/simplon/simplonbp-medium-webfont.woff',
      ttf: '../../assets/fonts/simplon/simplonbp-medium-webfont.ttf',
      svg: '../../assets/fonts/simplon/simplonbp-medium-webfont.svg'
    },
  )
}
  
  ${
  FontFace(
    'OiTextBold',
    {
      eot: simplonBoldEOT,
      woff: simplonBoldWOFF,
      ttf: simplonBoldTTF,
      svg: simplonBoldSVG
    },
    {
      eot: '../../assets/fonts/simplon/simplonbp-bold-webfont.eot',
      woff: '../../assets/fonts/simplon/simplonbp-bold-webfont.woff',
      ttf: '../../assets/fonts/simplon/simplonbp-bold-webfont.ttf',
      svg: '../../assets/fonts/simplon/simplonbp-bold-webfont.svg'
    },
  )
}
  
  ${
  FontFace(
    'OiTextHeadline',
    {
      eot: simplonHeadlineEOT,
      woff: simplonHeadlineWOFF,
      ttf: simplonHeadlineTTF,
      svg: simplonHeadlineSVG
    },
    {
      eot: '../../assets/fonts/simplon/simplonoi-headline-webfont.eot',
      woff: '../../assets/fonts/simplon/simplonoi-headline-webfont.woff',
      ttf: '../../assets/fonts/simplon/simplonoi-headline-webfont.ttf',
      svg: '../../assets/fonts/simplon/simplonoi-headline-webfont.svg'
    },
  )
}



html {

h1 { font-size:${H1_NORMAL} };
h2 { font-size:${H2_NORMAL} };
h3 { font-size:${H3_NORMAL} };
h4 { font-size:${H4_NORMAL} };
h5 { font-size:${H5_NORMAL} };
h6 { font-size:${H6_NORMAL} };

box-sizing: border-box;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:focus {
  outline: none;
}
::-moz-focus-inner {
  border: 0;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
#outlet {
  opacity: 1;
  }

body {
  min-height: 100%;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}
`;

export default globalStyles;
