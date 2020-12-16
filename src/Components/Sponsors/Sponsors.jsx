import React from 'react';
import styled from 'styled-components'
import '../../Variables.scss'

//images
import LBLogistics from './Images/LB_logistics.png'
import OrtophedischAdviesBuroBroeren from './Images/Logo-Orthopedisch-advies-buro-broeren.gif'
import Traa from './Images/Logo-traa.png'
import VAB from './Images/vAB.jpg'
// css ___________________________________________________________________
const Main = styled.div`
  padding: 60px;
  background-color: #EDEFF4;
  h2{
    margin-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px){
    grid-template-columns: 1fr;
  }
  gap: 60px;
  a{
    height: 200px;
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    img{
      object-fit: contain;
      filter: grayscale(1);
      opacity: 0.7;
      transition: all 0.1s ease-in-out;
      max-height: 170px;
      width: 100%;
      max-width: 100%;
    }
    &:hover{
      background-color: white;
      cursor: pointer;
      img{
        opacity: 0.9;
      }
    }
  }
`;

function Sponsors(props) {

  return (
    <Main>
      <h2>Sponsoren</h2>
      <Wrapper>
        <a href='https://lb-logistics.nl/' rel='noreferrer' target='_blank'>
          <img alt='LB logistics' src={`${LBLogistics}`}></img>
        </a>
        <a href='http://www.oabb-bv.nl/index.html' rel='noreferrer' target='_blank'>
          <img alt='Ortophedisch advies buro Broeren' src={`${OrtophedischAdviesBuroBroeren}`}></img>
        </a>
        <a>
          <img alt='Van Alebeek bouw bureau' src={`${VAB}`}></img>
        </a>
        <a href='https://www.traabv.nl/' rel='noreferrer' target='_blank'>
          <img alt='Traa BV' src={`${Traa}`}></img>
        </a>
      </Wrapper>
    </Main>
  );
}

export default Sponsors;
