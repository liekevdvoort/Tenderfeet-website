import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

function DataBar(props) {
 
  // css ___________________________________________________________________

  const Main = styled.div`
    position: absolute;
    bottom: 80px;
    padding: 10px 15px;
    background-color: white;
    margin: 20px;
    width: 100%;
    max-width: calc(100vw - 200px);
    filter: drop-shadow(0 0mm 2mm rgb(0, 0, 0, 0.10));

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `;
  const Bottom = styled.div `
    display: flex;
    margin-top: 5px;
    svg{
        color: #F28D2C;
        margin-right: 15px;
    }
  `;
  const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px 25px;
  `;

  return (
    <Main>
        <Wrapper>
            <h4>Wedstrijden</h4>
            <Bottom>
                <FontAwesomeIcon icon={faTrophy}/>
                <p>13</p>
            </Bottom>
        </Wrapper>
        
        <Wrapper>
            <h4>Doelpunten</h4>
            <Bottom>
                <FontAwesomeIcon icon={faTrophy}/>
                <p>13</p>
            </Bottom>
        </Wrapper>

        <Wrapper>
            <h4>Gewonnen</h4>
            <Bottom>
                <FontAwesomeIcon icon={faTrophy}/>
                <p>13</p>
            </Bottom>
        </Wrapper>

        <Wrapper>
            <h4>Stand</h4>
            <Bottom>
                <FontAwesomeIcon icon={faTrophy}/>
                <p>13</p>
            </Bottom>
        </Wrapper>

        <Wrapper>
            <h4>Wedstrijden</h4>
            <Bottom>
                <FontAwesomeIcon icon={faTrophy}/>
                <p>13</p>
            </Bottom>
        </Wrapper>
    </Main>
  );
}

export default DataBar;
