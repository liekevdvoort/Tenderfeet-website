import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import '../Variables.scss'


function News(props) {
 
  // css ___________________________________________________________________

  const Main = styled.div`
    height: 500px;
    padding: 60px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    background-color: #20394E;
    h2{
      color: white;
    }
  `;

  return (
    <Main>
      <h2>Nieuws en wedstrijdverslagen</h2>
    </Main>
  );
}

export default News;
