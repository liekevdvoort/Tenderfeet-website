import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

//import components
import CalandarCard from './CalandarCard/CalandarCard'

function TopSlider(props) {
 
  // css ___________________________________________________________________

  const Main = styled.div`
    padding: 60px;
    background-color: #EDEFF4;
    width: 100%;
  `;
  const Title = styled.h2`
    margin-bottom: 30px;
  `;
  return (
    <Main>
        <Title>AGENDA</Title>
        <CalandarCard/>
    </Main>
  );
}

export default TopSlider;
