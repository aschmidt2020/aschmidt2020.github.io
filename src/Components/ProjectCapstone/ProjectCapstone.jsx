import capstonelarge from '../../Images/CAPSTONELARGEbrett-jordan--dChkgNLmp4-unsplash.jpg';
import capstone from '../../Images/CAPSTONEfarzad-nazifi-p-xSl33Wxyc-unsplash.jpg';
import assignmentDashboard from '../../Images/assignmentdashboard-screenshot.png'

const ProjectCapstone = (props) => {
    return (
        <div className = "container-fluid" id = "capstone">
        <div className="row">
        <div className="col-5 text-center">
            <h2 className = "page-header-name-cv">CAPSTONE</h2>
            <img src = {assignmentDashboard} alt = "assignment dashboard landing page" className = "project-picture-capstone img-fluid center-block" />
            <br></br><br></br>
            <p className = "capstone-project-name">Assignment Dashboard</p>
            <p className = "capstone-project-desc" style={{'marginTop':'-1em'}}>Full-stack application uses Python with Django-REST framework backend and JavaScript with React.js frontend. Easily navigate through courses and their assignments with just a few button clicks. Video demo to come shortly.
                <br></br><br></br></p>
            <p className = "center">
                <button className = "button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                <a className = "view-capstone-link" href="https://github.com/aschmidt2020/assignment-dashboard-frontend" target="_blank">view code <i className="bi bi-arrow-right"></i></a>
            </p>
            
            <br></br><br></br><br></br>

        </div>
            
        <div className="col-7 text-center" style={{'marginTop':'10%'}}>
            <iframe width="780" height="550" src="https://www.youtube.com/embed/IO9LH1Nl_8E" type="text/html" title="YouTube video player" frameborder="0" allow="fullscreen"></iframe>
            <p className = "name-plate"></p>
        </div>
      </div>
      </div>
    );
}
 
export default ProjectCapstone;