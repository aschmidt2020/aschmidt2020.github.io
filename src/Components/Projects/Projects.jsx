import group from '../../Images/GROUPPROJannie-spratt-hCb3lIB8L8E-unsplash.jpg';
import individual from '../../Images/INDIVPROJilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import capstone from '../../Images/CAPSTONEfarzad-nazifi-p-xSl33Wxyc-unsplash.jpg';

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
                        <img src ={capstone} alt = "dual monitor computer setup" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}} />
                        <br></br>
                        <h2 className = "about-me-bold-left">Capstone Project Name</h2>
                        <p className = "about-me-normal" style={{'marginTop':'-1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                                <button href = "#" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></button>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={group} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                                <button href = "#" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></button>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={group} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the first slide. </p>
                                <button href = "#" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></button>  
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
                        <p className = "about-me-normal" style={{'marginTop':'-1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br></br><br></br>
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
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                                <button href = "#" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></button>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={individual} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                                <button href = "#" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></button>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src ={individual} alt = "group learning and project work" className = "img-fluid d-block w-100" style={{'height':'261px', 'width':'391px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the first slide. </p>
                                <button href = "#" className = "view-proj-link btn btn-secondary">view <i className="bi bi-arrow-right"></i></button>  
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
                        <p className = "about-me-normal" style={{'marginTop':'-1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br></br><br></br>
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