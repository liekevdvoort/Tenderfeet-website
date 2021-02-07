import { faBasketballBall, faListOl, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components'
 
// css ___________________________________________________________________

const Main = styled.div`
  position: absolute;
  bottom: 80px;
  padding: 10px 15px;
  background-color: white;
  margin: 20px;
  max-width: 1600px;
  width: calc(100vw - 200px);
  filter: drop-shadow(0 0mm 2mm rgb(0, 0, 0, 0.10));

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Bottom = styled.div `
  display: flex;
  margin-top: 5px;
  align-items: center;
  svg{
      color: #F28D2C;
      margin-right: 15px;
      font-size: 20px;
  }
`;
const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 25px;
`;

function DataBar(props) {

    console.log(props.pouleStand, 'test')
  return (
    <Main>
        { props.pouleStand && props.pouleStand.length > 0 && props.pouleStand.map(function(item, i){
            if(item.teamnaam.includes('Tenderfeet')){
                console.log('gevonden')
                return (
                    <Fragment>
        <Wrapper>
            <h4>Wedstrijden</h4>
            <Bottom>
                <FontAwesomeIcon icon={faBasketballBall}/>
                <p>{item.gespeeldewedstrijden && item.gespeeldewedstrijden}</p>
            </Bottom>
        </Wrapper>
        
        <Wrapper>
            <h4>Doelpunten</h4>
            <Bottom>
                <FontAwesomeIcon icon={faBasketballBall}/>
                <p>{item.doelpuntenvoor && item.doelpuntenvoor}</p>
            </Bottom>
        </Wrapper>

        <Wrapper>
            <h4>Gewonnen</h4>
            <Bottom>
                <FontAwesomeIcon icon={faTrophy}/>
                <p>{item.gewonnen && item.gewonnen}</p>
            </Bottom>
        </Wrapper>

        {/* <Wrapper>
            <h4>Spelers</h4>
            <Bottom>
                <FontAwesomeIcon icon={faUsers}/>
                <p>{item.positie && item.positie}</p>
            </Bottom>
        </Wrapper> */}

        <Wrapper>
            <h4>Stand</h4>
            <Bottom>
                <FontAwesomeIcon icon={faListOl}/>
                <p>{item.positie && item.positie}</p>
            </Bottom>
        </Wrapper></Fragment>
                )
            }
            })
        }
    </Main>
  );
}

export default DataBar;
