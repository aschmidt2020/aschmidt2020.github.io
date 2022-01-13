import capstonelarge from '../../Images/CAPSTONELARGEbrett-jordan--dChkgNLmp4-unsplash.jpg';
import capstone from '../../Images/CAPSTONEfarzad-nazifi-p-xSl33Wxyc-unsplash.jpg';

const ProjectCapstone = (props) => {
    return (
        <div className = "container-fluid" id = "capstone">
        <div className="row">
        <div className="col-5 text-center">
            <h2 className = "page-header-name-cv">CAPSTONE</h2>
            <img src = {capstone} alt = "dual monitor computer setup" className = "project-picture-capstone img-responsive center-block" />
            <br></br><br></br>
            <p className = "capstone-project-name">Capstone Project Name</p>
            <p className = "capstone-project-desc" style={{'marginTop':'-1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br></br><br></br></p>
            <p className = "center">
                <button className = "button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                <button className = "view-capstone-link">view code <i class="bi bi-arrow-right"></i></button>
            </p>
            
            <br></br><br></br><br></br>

        </div>
            
        <div className="col-7 text-center">
            <h1><img src = {capstonelarge} alt = "try it out demo" className = "main-picture-size img-responsive center-block" /></h1>
            <p className = "name-plate"></p>
        </div>
      </div>
      </div>
    );
}
 
export default ProjectCapstone;