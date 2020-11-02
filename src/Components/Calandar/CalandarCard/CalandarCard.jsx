import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall, faHome, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

//import components

function CalandarCard(props) {
 
  // css ___________________________________________________________________

  const Card = styled.div`
    background-color: white;
    margin-right: 40px;
    padding: 20px;
    h3{
      color: #F28D2C;
      margin-bottom: 4px;
    }
    div{
      margin-top: 12px;
      display: flex;
      align-items: center;
      p{
        display: inline-block;
        align-items: center;
        white-space: nowrap;
        &:first-letter{
          text-transform: uppercase!important;
        }
      }
      
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
      <div>
        <FontAwesomeIcon icon={faCalendar}/> 
        <p>{props.item.datum} {props.item.aanvangstijd}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBasketballBall}/> 
        <p style={{textTransform: 'lowercase', marginRight: '5px'}}>{props.item.plaats}, </p><p> {props.item.accommodatie}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={!props.item.thuisteam.includes('Tenderfeet') ? faSignOutAlt : faHome}/>
        <p> {!props.item.thuisteam.includes('Tenderfeet') ? 'Uit' : 'thuis'}</p>
      </div>
    </Card>
  );
}

export default CalandarCard;
