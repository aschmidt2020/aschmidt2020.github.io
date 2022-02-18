import resume from '../../Images/RESUMEmarkus-winkler-7iSEHWsxPLw-unsplash.jpg'
const ResumeCV = (props) => {
    return (
        <div className = "container-fluid" id= "resume">
            <div className="row">
                <div className="col-5">
                    <h2 className = "page-header-name-cv">RESUME</h2>
                    <br></br>
                    <p className = "about-me-bold-left">EDUCATION</p>
                    <p className = "about-me-normal" style={{'marginTop':'-1em'}}> - DevCodeCamp Graduate Full-Stack Development February 2022<br></br> - Medical College of Wisconsin Doctor of Pharmacy May 2020
                        <br></br><br></br></p>
                    <p className = "about-me-bold-left">EXPERIENCE</p>
                    <p className = "about-me-normal" style={{'marginTop':'-1em'}}> - Over 10 coding projects completed covering front-end and back-end <br></br> - Over 1 year experience in both hospital and retail setings
                        <br></br><br></br></p>
                    <p className = "about-me-bold-left">SKILLS</p>
                    <p className = "about-me-normal" style={{'marginTop':'-1em'}}> - Teamwork <br></br> - Critical Thinking <br></br> - Communication <br></br></p>

                    <p className = "center">
                        <button className = "button"><a href="https://drive.google.com/file/d/18_6hz_o-QMgK-rwvGOn8WfvOxxoaNY2n/view?usp=sharing" target = "_blank" className = "button-text">VIEW CV</a></button>
                        <button className = "button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                    </p>

                </div>
                    
                <div className="col-7 text-center">
                    <img src ={resume} alt = "creating a resume" className = "main-picture-size img-responsive center-block img-fluid"/>
                    <p className = "name-plate"> </p>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br>
                </div>
            </div>
      </div>
    );
}
 
export default ResumeCV;