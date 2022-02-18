import group from '../../Images/GROUPPROJannie-spratt-hCb3lIB8L8E-unsplash.jpg';
import individual from '../../Images/INDIVPROJilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import capstone from '../../Images/CAPSTONEfarzad-nazifi-p-xSl33Wxyc-unsplash.jpg';
import assignmentDashboard from '../../Images/assignmentdashboard-screenshot.png'

const Projects = (props) => {

    return (
        <div className = "container-fluid project-page" id = "projects">
            <br></br><br></br>
        <div className = "row"> 
                <h2 className = "page-header-name-projects">PROJECTS</h2>
                <p className = "about-me-bold">Projects completed during time at DevCodeCamp</p>
                <br></br>
            </div>
            <div className="row">

                <div className="col-4 project-box">
                    <div className="item-end-left">
                        <h1 className = "projects-bold">CAPSTONE</h1>
                        <img src ={assignmentDashboard} alt = "dual monitor computer setup" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}} />
                        <br></br>
                        <h2 className = "about-me-bold-left">Assignment Dashboard</h2>
                        <p className = "about-me-normal" style={{'marginTop':'-1em'}}>Full-stack application to make tracking assignments for educators and students almost too easy!</p>
                        <p className = "view-proj-link"><a href = "#capstone" className = "view-proj-link">view <i className="bi bi-arrow-right"></i></a></p>    
                    </div>
                </div>

                <div className="col-4 project-box">
                    <div className='item-middle'>
                        <h1 className = "projects-bold">GROUP</h1>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src ={group} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>YouTube Clone</h5>
                                <p>Full-stack YouTube clone using Google YouTube API.</p>
                                <a href = "https://github.com/aschmidt2020/YT-clone-react-frontend" target="_blank" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></a>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={group} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Trash Collector</h5>
                                <p>Full-stack application built with Django MVT. Includes Google Maps API and PayPal API.</p>
                                <a href = "https://github.com/TPavZ/dCC_Trash_Collector_Project_Audrey_Tyler" target="_blank" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></a>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={group} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Most Wanted</h5>
                                <p>Practice using JavaScript objects and sorting of arrays. Includes branches for simple alert/confirmation based navigation along with frontend version.</p>
                                <a href = "https://github.com/Joshua-Dela-Pena/Most-Wanted" target="_blank" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></a>  
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>

                        
                        <h2 className = "about-me-bold-left"> Group Projects</h2>
                        <p className = "about-me-normal" style={{'marginTop':'-1em'}}>Full-stack group projects (pairs) completed while at DevCodeCamp.</p>
                        <br></br><br></br><br></br>
                    </div>
                </div>

                <div className="col-4 project-box">
                    <div className='item-end-right'>

                        <h1 className = "projects-bold">INDIVIDUAL</h1>
                        <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src ={individual} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Flashcards App</h5>
                                <p>Full-stack flashcard application where users can create collections of flashcards and practice in their freetime. *in progress</p>
                                <a href = "https://github.com/aschmidt2020/flashcards_frontend_REACT" target="_blank" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></a>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={individual} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Social Feed Front-End</h5>
                                <p>Front-end React.js application to display user posts, comments and replies.</p>
                                <a href = "https://github.com/aschmidt2020/social-feed-react" target="_blank" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></a>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={individual} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Music Library</h5>
                                <p>Full-stack music application to keep track of songs. Allows you to search, sort, and filter through a database of music. </p>
                                <a href = "https://github.com/aschmidt2020/music-libary-react" target="_blank" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></a>  
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                        
                        <h2 className = "about-me-bold-left"> Individual Projects</h2>
                        <p className = "about-me-normal" style={{'marginTop':'-1em'}}>Sample individual projects completed while at DevCodeCamp.</p>
                        <br></br><br></br><br></br>
                    </div>
                </div>
            </div>

          <div className = "row">
                <p className = "center">
                    <button className = "project-button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                </p>
            </div>
            
            <br></br><br></br><br></br>
        </div>
    );
}
 
export default Projects;