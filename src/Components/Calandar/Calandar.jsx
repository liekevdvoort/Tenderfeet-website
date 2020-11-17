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
    max-width: 100vw;
    overflow-y: auto;
  `;
  const Title = styled.h2`
    margin-bottom: 30px;
  `;
  const CardsWrapper = styled.div`
    display: flex;
  `;
  return (
    <Main>
        <Title>AGENDA</Title>
        <CardsWrapper>
          { props.programma.length ?
            props.programma.map(function(item, i){
              return(
                <CalandarCard item={item} key={i}/>
              )
            })
            :
            <p>
              Er staat niets op de agenda
            </p>
          }
        </CardsWrapper>
    </Main>
  );
}

export default TopSlider;
