import group from '../../Images/GROUPPROJannie-spratt-hCb3lIB8L8E-unsplash.jpg';
import individual from '../../Images/INDIVPROJilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import capstone from '../../Images/CAPSTONEfarzad-nazifi-p-xSl33Wxyc-unsplash.jpg';

const Projects = (props) => {
    return (
        <div className = "container-fluid project-page" id = "projects">
        <div className = "row"> 
                <h2 className = "page-header-name-projects">PROJECTS</h2>
                <p className = "about-me-bold">Projects completed during time at DevCodeCamp</p>
                <br></br>
            </div>
            <div className="row">
                <div className="col-xs-6 col-md-4 project-box">
                    <h1 className = "projects-bold">CAPSTONE</h1>
                    <img src ={capstone} alt = "dual monitor computer setup" className = "project-picture-size img-responsive center-block" />
                    <h2 className = "about-me-bold-left">Capstone Project Name</h2>
                    <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#capstone" className = "view-proj-link">view &#129058</a></p>    
                    </div>
                <div className="col-xs-6 col-md-4 project-box">
                    <h1 className = "projects-bold">GROUP</h1>
                    <img src ={group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                    <h2 className = "about-me-bold-left"> Group Projects</h2>
                    <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#group" className = "view-proj-link">view &#129058</a></p>   
                    </div>
                <div className="col-xs-6 col-md-4 project-box">
                    <h1 className = "projects-bold">INDIVIDUAL</h1>
                    <img src ={individual} alt = "code" className = "project-picture-size img-responsive center-block" />
                    <h2 className = "about-me-bold-left"> Individual Projects</h2>
                    <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#individual" className = "view-proj-link">view &#129058</a></p>   
                    </div>
                </div>
          <div className = "row">
                <p className = "center">
                    <button className = "project-button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                </p>
                <br></br><br></br><br></br>
            </div>
        </div>
    );
}
 
export default Projects;