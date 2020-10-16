import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // state
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //component did mount
  useEffect(() => {

    //api call
    fetch('https://data.sportlink.com/teams?client_id=22ilckr4uam4jiejdbalgd0kla')
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true);
        setItems(json);
      });

      console.log(items, isLoaded)

  }, [])

  return (
    <div className="App">
      {(isLoaded && items.length <= 1) ?
        <div>geladen</div>
        :
        <div>laden</div>
      }
      
    </div>
  );
}

export default App;
