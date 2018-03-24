import React, { Component } from 'react';
import styled from 'styled-components';
import { title } from './styled_components/styled';



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
      </div>
    );
  }
}
export default App;