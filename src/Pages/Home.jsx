import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import '../Variables.scss'

//import components
import TopSlider from '../Components/TopSlider/TopSlider'
import Calandar from '../Components/Calandar/Calandar'
import News from '../Components/News'
import Sponsors from '../Components/Sponsors'
import Footer from '../Components/Footer';

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'




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

function Home() {
  // state
  const [pouleStand, setPouleStand] = useState({})
  const [teams, setTeams] = useState({})
  const [teamIndeling, setTeamIndeling] = useState({})
  const [programma, setProgramma] = useState({})
  const [isLoaded, setIsLoaded] = useState(false);

  //component did mount
  useEffect(() => {

    let urls = [
      //TEAMINDELING
      'https://data.sportlink.com/team-indeling?teamcode=538&lokaleteamcode=-1&teampersoonrol=ALLES&toonlidfoto=NEE&client_id=NpkhwpTnoe',
      //POULESTAND
      'https://data.sportlink.com/poulestand?poulecode=3706&gebruiklokaleteamgegevens=NEE&client_id=NpkhwpTnoe',
      //TEAMS
      'https://data.sportlink.com/teams?client_id=NpkhwpTnoe',
      //PROGRAMMA
      'https://data.sportlink.com/programma?gebruiklokaleteamgegevens=NEE&eigenwedstrijden=JA&thuis=JA&uit=JA&client_id=NpkhwpTnoe',
    ];
    
    // map every url to the promise of the fetch
    let requests = urls.map(url => fetch(url));
    
    // Promise.all waits until all jobs are resolved
    Promise.all(requests)
      .then(responses => responses.forEach((response, index) => {
        switch (index) {
          //TEAMINDELING
          case 0:
            response.json()
            .then(json => {
              setTeamIndeling(json);
              console.log('teamindeling', json);
            });
            break;
          //POULESTAND
          case 1:
            response.json()
            .then(json => {
              setPouleStand(json);
              console.log('poulestand', json);
            });
          break;
          //TEAMS
          case 2:
            response.json()
            .then(json => {
              setTeams(json);
              console.log('teams', json);
            });
            break;
          //PROGRAMMA
          case 3:
            response.json()
            .then(json => {
              setProgramma(json);
              console.log('programma', json);
            });
            break;
          default:
            break;
        }
       }
      ));
      setIsLoaded(true)

  }, [])


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
