import React from 'react';
import styled from 'styled-components'
import '../Variables.scss'

 
// css ___________________________________________________________________
const Main = styled.div`
  padding: 60px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background-color: #20394E;
  h2{
    color: white;
    margin-bottom: 30px;
  }
  p{
    color: white;
  }
`;

function News(props) {

  return (
    <Main>
      <h2>Nieuws &#38; wedstrijdverslagen</h2>
      
      <p>
        Er is momenteel geen nieuws.
      </p>
    </Main>
  );
}

export default News;
