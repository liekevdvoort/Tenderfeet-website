import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import '../Variables.scss'

import logoImage from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function TopSlider(props) {

  // state
  const [teams, setTeams] = useState([ {teamnaam:'Tenderfeet MSE 1', teamcode:12}, {teamnaam:'Heren recreanten', teamcode:18}, {teamnaam:'G-Team', teamcode:27}]);
  const [index, setIndex] = useState(0);

  // team texten
  const teamTexts = [
    {
      teamnaam: 'Tenderfeet MSE 1',
      teamcode: 12,
      text: 'lorem ipsum mse1'
    },
    {
      teamnaam: 'Tenderfeet VSE 1',
      teamcode: 538,
      text: 'lorem ipsum vse1'
    },
    {
      teamnaam: 'G-Team',
      teamcode: 27,
      text: 'lorem ipsum g team'
    },
    {
      teamnaam: 'Heren recreanten',
      teamcode: 18,
      text: 'lorem ipsum heren recreanten'
    }
  ]

  
  //component did mount
  useEffect(() => {
    setTeams(teams => [props.teams[0], ...teams])
    console.log(teams)
  }, [])

  function indexUp(){
    if(index >= teams.length-1){
      setIndex(0)
    }
    else{
      setIndex(index + 1)
    }
    console.log(teams)
  }

  function indexDown(){
    if(index <= 0){
      setIndex(teams.length-1)
    }
    else{
      setIndex(index - 1)
    }
  }
 
  // css ___________________________________________________________________

  const Main = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `;
  const Left = styled.div`
    height: 100vh;
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column; 
    padding: 60px 0 60px 60px;
  `;
  const Top = styled.div`
    display: flex;
    align-items: center;
    width:100%;
  `;
  const Logo = styled.img`
    margin-right: 30px;
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
    clip-path: polygon(220px 0, 100% 0, 100% 100%, 0% 100%);    
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
    clip-path: polygon(220px 0, 100% 0, 100% 100%, 0% 100%);
  `;
  const ChevronLeft = styled.div`
    cursor: pointer;
    position: absolute;
    top: calc(50vh - 20px);
    left: 20px;
    font-size: 40px;
    opacity: 0.8;
  `;
  const ChevronRight = styled.div`
    cursor: pointer;
    position: absolute;
    top: calc(50vh - 20px);
    right: 20px;
    font-size: 40px;
    color: white;
    z-index:1;
    opacity: 0.8;
  `;


  return (
    <Main>
        <ChevronLeft>
          <FontAwesomeIcon onClick={indexDown} icon={faChevronLeft}/>
        </ChevronLeft>
        <ChevronRight>
          <FontAwesomeIcon onClick={indexUp} icon={faChevronRight}/>
        </ChevronRight>
        <Left>
          <Top>
            <Logo src={logoImage}/>
            <Title>{teams[index] && teams[index].teamnaam}</Title>
          </Top>
          {/* <p>geladen {props.teams[0] && props.teams[0].teamnaam}</p> */}
          <div style={{margin: 'auto'}}>
            {
              teams.map(function(item, i){
                return(
                  <p key={i}>{item.teamnaam}</p>
                )
              })
            }
          </div>
        </Left>
        <Right>
          <Photo>

          </Photo>
        </Right>
    </Main>
  );
}

export default TopSlider;
