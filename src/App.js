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
 
  return (
    <div>
      <NavBar />
      <section id='section-1'><HomePage /></section>
      <section id='section-2'><AboutMe /></section>
      <section id='section-3'><ResumeCV /></section>
      <section id='section-4'><Projects /> <ProjectCapstone /></section>
      <section id='section-5'><ContactMe /></section>
    </div>
  );
}

export default App;
