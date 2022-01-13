import computerstethoscope from '../../Images/COMPUTERSTETHOnational-cancer-institute-NFvdKIhxYlU-unsplash.jpg'

const AboutMe = (props) => {
    return (
        <div className="container-fluid" id="about-me">
            <div className="row">
            <div className="col-5">
                <h2 className = "page-header-name-about-me">ABOUT ME</h2>
                <p className = "about-me-normal">
                    Welcome to my page! My name is Audrey Schmidt and I am currently studied full-stack development at DevCodeCamp.
                    My prior experiences include working in hospital pharmacy and retail pharmacy.
                    While in these positions, I learned how to work as a team towards a common goal and think on the spot.
                    After almost two years in pharmacy, I decided I wanted to help patients in a different way.
                </p>
                <br></br>
                <p className = "about-me-normal">
                    I always had an interest in technology and seeing all the ways it works to help us.
                    During pharmacy school, many times I would use the power of technology to help patients, other students, and other practitioners.
                    After learning about software development, I found my calling in life.
                    I have now found a role that still allows me to help people, but to do it in the most impactful way possible.
                </p>
                <br></br>
                <p className = "about-me-normal">
                    By working together I believe we can improve a countless number of lives and make technology better every day.
                    I hope that you find that I will be a useful asset to any team I am placed on.
                    Thank you for stopping by!
                </p>
                
                <p className = "center">
                    <button className = "button"><a href="#projects" className = "button-text">VIEW MY WORK</a></button>
                    <button className = "button"><a href="#contact" className = "button-text">CONTACT ME</a></button>
                </p>

            </div>
                
            <div className="col-7">
                <img src={computerstethoscope} alt = "computer and stethoscope medical technology picture" className= "center-block main-picture-size img-responsive"/>
                <p className = "name-plate"></p>
            </div>
        </div>
    </div>
    );
}
 
export default AboutMe;