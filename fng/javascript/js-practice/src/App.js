import React, { useEffect } from 'react';
import './App.css';
import DebounceComponent from './component/debounce/bebounce'
import YouTubeShortEmbed from './component/debounce/YouTubeShortEmbed'

function App() {

  useEffect(() => {
    // Set a timeout to reload the window after 14 seconds
    // const timer = setTimeout(() => {
    //   window.location.reload();
    // }, 20000);

    // return () => clearTimeout(timer);
  }, []);

const shortsArray = ["x5aA_J15ADk","shrh7JyHgdE","d6GXNdUr1FU","Fw-hNHu31S8","cGtg9oMBa6s","iXTmZNkqpXQ"]
  return (
    <div className="App">
      {/* <YouTubeShortEmbed videoId="shrh7JyHgdE" /> */}
      {shortsArray.map((videoId, index) => (
        <YouTubeShortEmbed key={index} videoId={videoId} />
      ))}
      <DebounceComponent />
    </div>
  );
}

export default App;
