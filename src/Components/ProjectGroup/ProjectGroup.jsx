import group from '../../Images/GROUPPROJannie-spratt-hCb3lIB8L8E-unsplash.jpg';

const ProjectGroup = (props) => {
    return (
        <div className = "container-fluid project-page" id = "group">
            <div className = "row"> 
                <h2 className = "page-header-name-projects">GROUP PROJECTS</h2>
                <p className = "about-me-bold">Group projects completed during time at DevCodeCamp beginning to end</p>
                <br></br>
                <p className = "center">
                    <button className = "project-button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                </p>
                </div>
            <div className="row">
                <div className="col-6 col-md-4 project-box">
                    <h1 className = "projects-bold">GROUP PROJECT</h1>
                    <img src = {group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                    <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                <div className="col-6 col-md-4 project-box">
                    <h1 className = "projects-bold">GROUP PROJECT</h1>
                    <img src = {group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                    <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                <div className="col-6 col-md-4 project-box">
                    <h1 className = "projects-bold">GROUP PROJECT</h1>
                    <img src = {group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                    <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-4 project-box">
                        <h1 className = "projects-bold">GROUP PROJECT</h1>
                        <img src = {group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                        <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className = "view-proj-link"><a href = "#" target = "_blank">link to code &#129058</a></p>
                        </div>
                    <div className="col-6 col-md-4 project-box">
                        <h1 className = "projects-bold">GROUP PROJECT</h1>
                        <img src = {group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                        <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                        </div>
                    <div className="col-6 col-md-4 project-box">
                        <h1 className = "projects-bold">GROUP PROJECT</h1>
                        <img src = {group} alt = "group learning and project work" className = "project-picture-size img-responsive center-block" />
                        <p className = "about-me-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className = "view-proj-link"><a href = "#" className = "view-proj-link">link to code &#129058</a></p>   
                        </div>
                    </div>

        </div>
    );
}
 
export default ProjectGroup;