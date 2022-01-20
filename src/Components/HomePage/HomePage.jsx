import homepage from '../../Images/AudreySchmidtHOMEPAGE.jpg';

const HomePage = (props) => {
    return ( 
        <div className= "container-fluid" id="homepage">
        <div className="row">
            <div className="col-5">
                <h2 className = "page-header-name-home">AUDREY SCHMIDT</h2>
                <p className = "about-me-bold"> <br></br>From helping patients as a pharmacist...<br></br> to helping them as a developer.<br></br></p>
                <p className = "about-me-bold"><br></br>Click below to learn more about me.</p>
                <br></br>
                <p className = "center">
                    <button className = "button"><a href="#about-me" className = "button-text">ABOUT ME</a></button>
                    <button className = "button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                </p>
            </div>
                
            <div className="col-7 text-center">
                <img src={homepage} alt="Audrey Schmidt Headshot 2020" className= "picture-home-size img-fluid"/>
                <h1 className = "name-plate text-center">Audrey Schmidt, PharmD <br></br> Student at DevCodeCamp </h1>
            </div>
        </div>
        </div>

     );
}
 
export default HomePage;