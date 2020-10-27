import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { css } from 'styled-components'

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  // state
  const [data, setData] = useState([]);
  const [pouleStand, setPouleStand] = useState({})
  const [isLoaded, setIsLoaded] = useState(false);

  //component did mount
  useEffect(() => {

    // api calls
    
    // fetch('https://data.sportlink.com/pouleuitslagen?client_id=NpkhwpTnoe')
    //   .then(res => res.json())
    //   .then(json => {
    //     setIsLoaded(true);
    //     setData(json);
    //     console.log(json);
    //   });
    //   fetch('https://data.sportlink.com/pouleuitslagen?poulecode=3706&gebruiklokaleteamgegevens=NEE&client_id=NpkhwpTnoe')
    //   .then(res => res.json())
    //   .then(json => {
    //     setIsLoaded(true);
    //     setData(json);
    //     console.log(json);
    //   });

     // fetch('https://data.sportlink.com/team-gegevens?teamcode=538&lokaleteamcode=-1&client_id=NpkhwpTnoe')
     // .then(res => res.json())
     // .then(json => {
     //   setIsLoaded(true);
     //   setData(json);
     //   console.log(json);
     // });

    // TEAMS
    // fetch('https://data.sportlink.com/teams?client_id=NpkhwpTnoe')
    // .then(res => res.json())
    // .then(json => {
    //   setIsLoaded(true);
    //   setData(json);
    //   console.log(json);
    // });

    // POULESTAND https://data.sportlink.com/poulestand?poulecode=3706&gebruiklokaleteamgegevens=NEE&client_id=NpkhwpTnoe
    fetch('https://data.sportlink.com/poulestand?poulecode=3706&gebruiklokaleteamgegevens=NEE&client_id=NpkhwpTnoe')
    .then(res => res.json())
    .then(json => {
      setIsLoaded(true);
      setPouleStand(json);
      console.log(json);
    });


    // api call sportlink list
    // fetch('https://data.sportlink.com/list?client_id=NpkhwpTnoe')
    //   .then(res => res.json())
    //   .then(json => {
    //     setIsLoaded(true);
    //     setData(json);
    //     console.log(json);
    //   });

    //   console.log(data, isLoaded)
    console.log('poulestand', pouleStand)
  }, [])

  // css ----------------------------------------

  const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

  return (
    <div className="App">
      { isLoaded ?
        <div>geladen {pouleStand[1] && pouleStand[0].teamnaam}</div>
        :
        <Loading>laden <FontAwesomeIcon spin icon={faCircleNotch} /></Loading>
      }
      
    </div>
  );
}

export default App;
