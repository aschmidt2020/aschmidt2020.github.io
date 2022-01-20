import Scrollspy from 'react-scrollspy'

const NavBar = (props) => {
    
    return ( 
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top py-0" style={{'paddingTop':'0px','paddingBottom':'0px'}}>
        <div className="container-fluid" style={{'paddingTop':'0px','paddingBottom':'0px'}}>
            <a className="navbar-brand" href="#" style={{'paddingTop':'0px','paddingBottom':'0px', 'marginTop':'-12px'}}>AUDREY SCHMIDT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{'paddingTop':'0px','paddingBottom':'0px'}}>
            <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } currentClassName="is-current">
                <ul className="navbar-nav" style={{'paddingTop':'0px','paddingBottom':'0px'}}>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#homepage">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#about-me">ABOUT ME</a></li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#resume">RESUME/CV</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PROJECTS
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{'marginTop':'0.5em'}}>
                            <li><a className="dropdown-item" href="#projects">Home</a></li>
                            <li><a className="dropdown-item" href="#capstone">Capstone</a></li>
                            {/* <li><a className="dropdown-item" href="#group">Group</a></li>
                            <li><a className="dropdown-item" href="#individual">Individual</a></li> */}
                        </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#contact">CONTACT ME</a></li>
                </ul>
            </Scrollspy>
            </div>
        </div>
        </nav>
     );
}
 
export default NavBar;