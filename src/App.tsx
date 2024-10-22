import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Screens } from './screens/Screens';
import { CVsList } from './screens/CVsList';
import { CVView } from './screens/CVView';

function App() {

  const [currentView, setCurrentView] = useState<Screens>(Screens.CVsList);

  const [cvs, setCVs] = useState<any[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);

  const loadCVs = (async () => {
    const data = await (await fetch('cvs.json')).json();
    setCVs(data);
    setExperiences(data[0].experiences);
    selectView();
  });

  const selectView = () => {
    experiences.length > 0 ? setCurrentView(Screens.CVView) : setCurrentView(Screens.CVsList);
  }

  if (cvs.length === 0) {
    loadCVs();
  }

  const chooseScreen = () => {
    switch (currentView) {
      case Screens.CVsList:
        return (
        <>
          <CVsList cvs={cvs}></CVsList>
          <button onClick={selectView}>View CV</button>
        </>)
      case Screens.CVView:
        return <CVView experiences={experiences}></CVView>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {chooseScreen()}
      </header>
    </div>
  );
}

export default App;
