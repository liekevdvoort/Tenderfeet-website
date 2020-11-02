import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import '../Variables.scss'

//import components
import TopSlider from '../Components/TopSlider'
import Calandar from '../Components/Calandar/Calandar'
import News from '../Components/News'
import Sponsors from '../Components/Sponsors'
import Footer from '../Components/Footer';

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

function Home() {
  // state
  const [data, setData] = useState([]);
  const [pouleStand, setPouleStand] = useState({})
  const [teams, setTeams] = useState({})
  const [teamIndeling, setTeamIndeling] = useState({})
  const [programma, setProgramma] = useState({})
  const [isLoaded, setIsLoaded] = useState(false);

  //component did mount
  useEffect(() => {

    // api calls ___________________________________________________________________
    
    // fetch('https://data.sportlink.com/pouleuitslagen?client_id=NpkhwpTnoe')
    //   .then(res => res.json())
    //   .then(json => {
    //     setIsLoaded(true);
    //     setData(json);
    //     console.log('pouleUitslagen', json);
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

    // PROGRAMMA
    fetch('https://data.sportlink.com/programma?gebruiklokaleteamgegevens=NEE&eigenwedstrijden=JA&thuis=JA&uit=JA&client_id=NpkhwpTnoe')
    .then(res => res.json())
    .then(json => {
      setProgramma(json);
      console.log('programma', json);
    });

    //TEAMS
    fetch('https://data.sportlink.com/teams?client_id=NpkhwpTnoe')
    .then(res => res.json())
    .then(json => {
      setTeams(json);
      console.log('teams', json);
    });

    // POULESTAND
    fetch('https://data.sportlink.com/poulestand?poulecode=3706&gebruiklokaleteamgegevens=NEE&client_id=NpkhwpTnoe')
    .then(res => res.json())
    .then(json => {
      setPouleStand(json);
      console.log('pouleStand', json);
    });

    // TEAM INDELING
    fetch('https://data.sportlink.com/team-indeling?teamcode=538&lokaleteamcode=-1&teampersoonrol=ALLES&toonlidfoto=NEE&client_id=NpkhwpTnoe')
    .then(res => res.json())
    .then(json => {
      setIsLoaded(true);
      setTeamIndeling(json);
      console.log('teamIndeling', json);
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

  }, [])

  // css ___________________________________________________________________

  const Loading = styled.div`
    height: 100vh;
    width: 100vw;
    background-color:#20394E;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  `;

  const Main = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
  `;

  return (
    <div className="Home">
      { isLoaded ?
        <Main>
            <TopSlider teams={teams}/>
            <Calandar programma={programma}/>
            <News/>
            <Sponsors/>
            <Footer/>
        </Main>
        :
        <Loading>laden <FontAwesomeIcon style={{marginLeft: '15px'}} spin icon={faCircleNotch}/></Loading>
      }
      
    </div>
  );
}

export default Home;
