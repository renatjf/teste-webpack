import { injectGlobal } from 'styled-components';
// import * as vars from './variables'
import simplonBoldEOT from '../../assets/fonts/simplon/simplonbp-bold-webfont.eot'
import simplonBoldWOFF from '../../assets/fonts/simplon/simplonbp-bold-webfont.woff'
import simplonBoldTTF from '../../assets/fonts/simplon/simplonbp-bold-webfont.ttf'
import simplonBoldSVG from '../../assets/fonts/simplon/simplonbp-bold-webfont.svg'
import simplonRegularEOT from '../../assets/fonts/simplon/simplonbp-regular-webfont.eot'
import simplonRegularWOFF from '../../assets/fonts/simplon/simplonbp-regular-webfont.woff'
import simplonRegularTTF from '../../assets/fonts/simplon/simplonbp-regular-webfont.ttf'
import simplonRegularSVG from '../../assets/fonts/simplon/simplonbp-regular-webfont.svg'
import simplonMediumEOT from '../../assets/fonts/simplon/simplonbp-medium-webfont.eot'
import simplonMediumWOFF from '../../assets/fonts/simplon/simplonbp-medium-webfont.woff'
import simplonMediumTTF from '../../assets/fonts/simplon/simplonbp-medium-webfont.ttf'
import simplonMediumSVG from '../../assets/fonts/simplon/simplonbp-medium-webfont.svg'
import simplonLightEOT from '../../assets/fonts/simplon/simplonbp-light-webfont.eot'
import simplonLightWOFF from '../../assets/fonts/simplon/simplonbp-light-webfont.woff'
import simplonLightTTF from '../../assets/fonts/simplon/simplonbp-light-webfont.ttf'
import simplonLightSVG from '../../assets/fonts/simplon/simplonbp-light-webfont.svg'
import simplonHeadlineEOT from '../../assets/fonts/simplon/simplonoi-headline-webfont.eot'
import simplonHeadlineWOFF from '../../assets/fonts/simplon/simplonoi-headline-webfont.woff'
import simplonHeadlineTTF from '../../assets/fonts/simplon/simplonoi-headline-webfont.ttf'
import simplonHeadlineSVG from '../../assets/fonts/simplon/simplonoi-headline-webfont.svg'

const FontFace = (FONT_FACE, ONLINE_PATH) => {

  let output = {
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
    url(${output.eot + '?#iefix'}) format('embedded-opentype'),
    url(${output.woff}) format('woff'),
    url(${output.ttf}) format('truetype'),
    url(${output.svg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
  `)

}

injectGlobal`

${
  FontFace('OiTextLight',
    {
      eot: simplonLightEOT,
      woff: simplonLightWOFF,
      ttf: simplonLightTTF,
      svg: simplonLightSVG
    },
    {
      eot: "../../assets/fonts/simplon/simplonbp-light.eot",
      woff: "../../assets/fonts/simplon/simplonbp-light.woff",
      ttf: "../../assets/fonts/simplon/simplonbp-light.ttf",
      svg: "../../assets/fonts/simplon/simplonbp-light.svg"
    })
  }

${
  FontFace('OiTextRegular',
    {
      eot: simplonRegularEOT,
      woff: simplonRegularWOFF,
      ttf: simplonRegularTTF,
      svg: simplonRegularSVG
    },
    {
      eot: "../../assets/fonts/simplon/simplonbp-regular-webfont.eot",
      woff: "../../assets/fonts/simplon/simplonbp-regular-webfont.woff",
      ttf: "../../assets/fonts/simplon/simplonbp-regular-webfont.ttf",
      svg: "../../assets/fonts/simplon/simplonbp-regular-webfont.svg"
    })
  }

${
  FontFace('OiTextMedium',
    {
      eot: simplonMediumEOT,
      woff: simplonMediumWOFF,
      ttf: simplonMediumTTF,
      svg: simplonMediumSVG
    },
    {
      eot: "../../assets/fonts/simplon/simplonbp-medium-webfont.eot",
      woff: "../../assets/fonts/simplon/simplonbp-medium-webfont.woff",
      ttf: "../../assets/fonts/simplon/simplonbp-medium-webfont.ttf",
      svg: "../../assets/fonts/simplon/simplonbp-medium-webfont.svg"
    })
  }

${
  FontFace('OiTextBold',
    {
      eot: simplonBoldEOT,
      woff: simplonBoldWOFF,
      ttf: simplonBoldTTF,
      svg: simplonBoldSVG
    },
    {
      eot: "../../assets/fonts/simplon/simplonbp-bold-webfont.eot",
      woff: "../../assets/fonts/simplon/simplonbp-bold-webfont.woff",
      ttf: "../../assets/fonts/simplon/simplonbp-bold-webfont.ttf",
      svg: "../../assets/fonts/simplon/simplonbp-bold-webfont.svg"
    })
  }

${
  FontFace('OiTextHeadline',
    {
      eot: simplonHeadlineEOT,
      woff: simplonHeadlineWOFF,
      ttf: simplonHeadlineTTF,
      svg: simplonHeadlineSVG
    },
    {
      eot: "../../assets/fonts/simplon/simplonoi-headline-webfont.eot",
      woff: "../../assets/fonts/simplon/simplonoi-headline-webfont.woff",
      ttf: "../../assets/fonts/simplon/simplonoi-headline-webfont.ttf",
      svg: "../../assets/fonts/simplon/simplonoi-headline-webfont.svg"
    })
  }
`;