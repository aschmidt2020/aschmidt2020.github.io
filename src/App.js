import AboutMe from "./Components/AboutMe/AboutMe";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import ResumeCV from "./Components/ResumeCV/ResumeCV";
import './App.css'
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutMe />
      <ResumeCV />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
