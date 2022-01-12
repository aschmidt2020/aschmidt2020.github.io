import individual from '../../Images/INDIVPROJilya-pavlov-OqtafYT5kTw-unsplash.jpg';

const ProjectIndividual = (props) => {
    return (
        <div className = "container-fluid project-page" id = "individual">
            <div className =  "row"> 
                <h2 className = "page-header-name-projects">INDIVIDUAL PROJECTS</h2>
                 <p className = "about-me-bold">Individual projects completed during time at DevCodeCamp beginning to  end</p>
               <br></br>
                <p className = "center">
                     <button className = "project-button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                </p>
                </div>
            <div className="row">
                <div className="col-6 col-md-4 project-box">
                    <h1 className = "projects-bold">INDIVIDUAL PROJECT</h1>
                    <img src = {individual} alt = "code" className = "project-picture-size img-responsive center-block" />
                    <p className = "about-me-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                <div className="col-6 col-md-4 project-box">
                    <h1 className = "projects-bold">INDIVIDUAL PROJECT</h1>
                    <img src = {individual} alt = "code" className = "project-picture-size img-responsive center-block" />
                    <p className = "about-me-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                <div className="col-6 col-md-4 project-box">
                    <h1 className = "projects-bold">INDIVIDUAL PROJECT</h1>
                    <img src ={individual} alt = "code" className = "project-picture-size img-responsive center-block" />
                    <p className = "about-me-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-4 project-box">
                        <h1 className = "projects-bold">INDIVIDUAL PROJECT</h1>
                        <img src = {individual} alt = "code" className = "project-picture-size img-responsive center-b lock" />
                        <p className = "about-me-norm al">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className = "view-proj-link"><a href = "#" target = "_blank">link to code &#129058</a></p>
                        </div>
                    <div className="col-6 col-md-4 project-box">
                        <h1 className = "projects-bold">INDIVIDUAL PROJECT</h1>
                        <img src = {individual} alt = "code" className = "project-picture-size img-responsive center-b lock" />
                        <p className = "about-me-norm al">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                        </div>
                    <div className="col-6 col-md-4 project-box">
                        <h1 className = "projects-bold">INDIVIDUAL PROJECT</h1>
                        <img src = {individual} alt = "code" className = "project-picture-size img-responsive center-b lock" />
                        <p className = "about-me-norm al">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                    <div className = "row"> <br></br><br></br> </div>
                    </div>
    

        </div>
    );
}
 
export default ProjectIndividual; 