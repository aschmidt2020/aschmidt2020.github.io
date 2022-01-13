import AboutMe from "./Components/AboutMe/AboutMe";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import ResumeCV from "./Components/ResumeCV/ResumeCV";
import './App.css'
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import ProjectCapstone from "./Components/ProjectCapstone/ProjectCapstone";
import ProjectGroup from "./Components/ProjectGroup/ProjectGroup";
import ProjectIndividual from "./Components/ProjectIndividual/ProjectIndividual";
import React, { useState } from 'react';


function App() {
  const [groupVisible, setGroupVisible] = useState(false);
  const [individualVisible, setIndividualVisible] = useState(false);

  function toggleGroupVisible(){
    setGroupVisible(true)
  }

  function toggleIndividualVisible(){
    setIndividualVisible(true)
  }


  return (
    <div>
      <NavBar toggleGroupVisible={toggleGroupVisible} toggleGroupVisible={toggleIndividualVisible}/>
      <HomePage />
      <AboutMe />
      <ResumeCV />
      <Projects toggleGroupVisible={toggleGroupVisible} toggleGroupVisible={toggleIndividualVisible}/>
      <ProjectCapstone />
      {groupVisible && <ProjectGroup />}
      {individualVisible && <ProjectIndividual />}
      <ContactMe />
    </div>
  );
}

export default App;
