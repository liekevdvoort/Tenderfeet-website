import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import '../Variables.scss'

import logoImage from '../images/logo.png'

function TopSlider(props) {
 
  // css ___________________________________________________________________

  const Main = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Left = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const Top = styled.div`
    display: flex;
    align-items: center;
  `;
  const Logo = styled.img`
    margin-right: 20px;
    height: 140px;
    width: auto;
  `;
  const Title = styled.h2`

  `;


  const Right = styled.div`
    height: 100vh;
    width: 80vw;
    background-color:#20394E;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    clip-path: polygon(24% 0, 100% 0, 100% 100%, 0% 100%);    
    padding-left: 45px;
  `;
  const Photo = styled.div`
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:blue;
    color: white;
    clip-path: polygon(24% 0, 100% 0, 100% 100%, 0% 100%);
  `;

  return (
    <Main>
        <Left>
          <Top>
            <Logo src={logoImage}/>
            <Title>{props.teams[0] && props.teams[0].teamnaam}</Title>
          </Top>
          geladen {props.teams[0] && props.teams[0].teamnaam}

        </Left>
        <Right>
          <Photo>

          </Photo>
        </Right>
    </Main>
  );
}

export default TopSlider;
