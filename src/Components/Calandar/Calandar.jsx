import React from 'react';
import styled from 'styled-components'

//import components
import CalandarCard from './CalandarCard/CalandarCard'
 
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

function TopSlider(props) {
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
              Er staat momenteel niets op de agenda
            </p>
          }
        </CardsWrapper>
    </Main>
  );
}

export default TopSlider;
