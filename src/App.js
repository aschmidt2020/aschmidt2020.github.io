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

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutMe />
      <ResumeCV />
      <Projects />
      <ProjectCapstone />
      <ProjectGroup />
      <ProjectIndividual />
      <ContactMe />
    </div>
  );
}

export default App;
