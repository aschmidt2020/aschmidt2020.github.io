import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { ResumeCV } from './Components/ResumeCV/ResumeCV'
import { ContactMe } from './Components/ContactMe/ContactMe';
import { ProjectCapstone } from './Components/ProjectCapstone/ProjectCapstone';
import { Projects } from './Components/Projects/Projects';
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
