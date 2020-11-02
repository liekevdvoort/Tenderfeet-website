import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall, faHome, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

//import components

function CalandarCard(props) {
 
  // css ___________________________________________________________________

  const Card = styled.div`
    width: 300px;
    background-color: white;
    margin-right: 40px;
    padding: 20px;
    h3{
      color: #F28D2C;
      margin-bottom: 14px;
    }
    p{
      margin-top: 12px;
      display: flex;
      align-items: center;
      svg{
        color: #20394E;
        margin-right: 10px;
        font-size:22px;
      }
    }
  `;
  return (
    <Card>
      <h3>{props.item.teamnaam}</h3>
      <p><FontAwesomeIcon icon={faCalendar}/> {props.item.datum} {props.item.aanvangstijd}</p>
      <p><FontAwesomeIcon icon={faBasketballBall}/> {props.item.accommodatie}</p>
      <p><FontAwesomeIcon icon={!props.item.thuisteam.includes('Tenderfeet') ? faSignOutAlt : faHome}/> {!props.item.thuisteam.includes('Tenderfeet') ? 'Uit' : 'thuis'}</p>
    </Card>
  );
}

export default CalandarCard;
