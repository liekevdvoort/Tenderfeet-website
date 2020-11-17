import React from 'react';
import styled from 'styled-components'
import '../Variables.scss'

// css ___________________________________________________________________
const Main = styled.div`
  padding: 60px;
  background-color: #EDEFF4;
  h2{
    margin-bottom: 30px;
  }
`;

function Sponsors(props) {

  return (
    <Main>
      <h2>Sponsoren</h2>
    </Main>
  );
}

export default Sponsors;
