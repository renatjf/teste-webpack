import { injectGlobal } from 'styled-components';
import SimplonRegular from '../../assets/fonts/simplon/simplonbp-regular-webfont.ttf';

injectGlobal`
  @font-face {
    font-family: SimplonRegular;
    src: url('${SimplonRegular}') format('opentype');
  }
`