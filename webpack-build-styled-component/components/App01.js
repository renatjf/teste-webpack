import React, { Component } from 'react';
import styled from 'styled-components';
import { title } from './styled_components/styled';
import styledSASS from './styled_components/styled-sass';

const Box = styled.div`
  ${ title('250') }
`;



class App extends Component {

  render() {
    return (
      <div>
        <h4>Webpack build Styled component</h4>
        <Box>
          teste          
        </Box>
        <div style={styledSASS}>
          styled sass
          <div className="lalala">
          lalalalalalal
          </div>
        </div>
      </div>
    );
  }
}
export default App;