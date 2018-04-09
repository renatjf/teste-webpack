import styled from 'styled-components';
import * as vars from './variables';
import * as mixins from './mixins';

const TesteSASS = styled.div`
    font-family: ${vars.FONT_LIGHT};
    font-size: ${mixins.rem(150)};
` ;

export default TesteSASS;