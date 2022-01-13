import resume from '../../Images/RESUMEmarkus-winkler-7iSEHWsxPLw-unsplash.jpg'
const ResumeCV = (props) => {
    return (
        <div className = "container-fluid" id= "resume">
      <div className="row">
        <div className="col-5">
            <h2 className = "page-header-name-cv">CURRICULUM VITAE</h2>
            <br></br>
            <p className = "about-me-bold-left">EDUCATION</p>
            <p className = "about-me-normal"> - DevCodeCamp Graduate Full-Stack Development Candidate February 2022<br></br> - Medical College of Wisconsin Doctor of Pharmacy May 2020
                <br></br><br></br></p>
            <p className = "about-me-bold-left">EXPERIENCE</p>
            <p className = "about-me-normal"> - Over 10 coding projects completed covering front-end and back-end <br></br> - Over 1 year experience in both hospital and retail setings
                <br></br><br></br></p>
            <p className = "about-me-bold-left">SKILLS</p>
            <p className = "about-me-normal"> - Teamwork <br></br> - Critical Thinking <br></br> - Communication <br></br></p>

            <p className = "center">
                <button className = "button"><a href="https://docs.google.com/document/d/1Di5-wYl4yUWdpqBWp6xX93U3_Vto5Ehj/edit?usp=sharing&ouid=112134997933379281598&rtpof=true&sd=true" target = "_blank" className = "button-text">VIEW CV</a></button>
                <button className = "button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
            </p>

        </div>
            
        <div className="col-7">
            <img src ={resume} alt = "creating a resume" className = "main-picture-size img-responsive center-block"/>
            <br></br><br></br><br></br>
            <p className = "name-plate"> <br></br> </p>
        </div>
      </div>
      </div>
    );
}
 
export default ResumeCV;