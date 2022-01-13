import contact from  '../../Images/AudreySchmidtCONTACT.jpg'
const ContactMe = (props) => {
    return (
        <div className = "container-fluid" id = "contact">
       <div className="row">
                <div className="col-5">
                    <h2 className = "page-header-name-contact">CONTACT ME</h2>


                    <p className = "about-me-bold-left-big">EMAIL<a href="mailto:audsch@outlook.com" className = "contact-me-link" target = "_blank">click here</a></p>
                    <p className = "about-me-normal" style={{'marginTop':'-1em'}}>audsch@outlook.com</p>
                    <br></br>
                    <p className = "about-me-bold-left-big">LINKEDIN<a href="https://www.linkedin.com/in/audsch" className = "contact-me-link" target = "_blank">click here</a></p>
                    <p className = "about-me-normal" style={{'marginTop':'-1em'}}>www.linkedin.com/in/audsch</p>
                    <br></br>
                    <p className = "about-me-bold-left-big" >GITHUB<a href="https://www.github.com/aschmidt2020" className = "contact-me-link" target = "_blank">click here</a></p>
                    <p className = "about-me-normal" style={{'marginTop':'-1em'}}>https://github.com/aschmidt2020</p>

                    <br></br><br></br><br></br>

                    <p className = "center">
                        <button className = "button"><a href="#homepage" className = "button-text">BACK TO HOME</a></button>
                    </p>

                </div>
                    
                <div className="col-7 text-center">
                    <h2><img src={contact} alt = "Audrey Schmidt Headshot 2020" className = "picture-contact-size img-responsive center-block" /></h2>
                    <p className = "name-plate">Audrey Schmidt, PharmD <br></br> Student at DevCodeCamp </p>
                </div>
            </div>
            </div>

    );
}
 
export default ContactMe;