import React from 'react';
import styled from 'styled-components'
import '../Variables.scss'


import logoImage from '../images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
 
// css ___________________________________________________________________

const Main = styled.div`
  padding: 60px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background-color: #20394E;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 60px;
  div{
    grid-column: span 2;
    h3{
      color: white;
      margin-bottom: 10px;
    }
    a{
      text-decoration: none;
    }
    p{
      color: white;
      margin-bottom: 10px;
    }
    svg{
      color: white;
      font-size: 25px;
      margin-right: 15px;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover{
        opacity: 1;
      }
    }
    &:last-child{
      grid-column: span 3;
    }
  }
`;
const Logo = styled.img`
align-self: center;
justify-self: center;
height: 120px;
width: auto;
grid-column: span 2;
`;

function Footer(props) {

  return (
    <Main>
      <Logo src={logoImage}/>
      <div>
        <h3>Contact</h3>
        <a href='tel:0645343221'><p>Telefoon: 06 453 432 21</p></a>
        <a href='mailto:tenderfeet.info.nl'><p>E-mail: tenderfeet.info.nl</p></a>
        <a href='https://www.facebook.com/BCtenderfeet' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook}/></a>
        <a href='https://www.instagram.com/tenderfeetbasketbal/' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faInstagram}/></a>
      </div>
      <div>
        <h3>Locatie</h3>
        <p>Sporthal de Zaert</p>
        <p>Heeswijk-Dinther</p>
        <p>Torenstraat 12</p>
        <p>5473AI</p>
      </div>
      <div>
        <h3>Trainigs tijden</h3>

      </div>
    </Main>
  );
}

export default Footer;
