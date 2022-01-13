import Scrollspy from 'react-scrollspy'

const NavBar = (props) => {
    
    return ( 


        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" >AUDREY SCHMIDT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <ul className="navbar-nav">
                <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } currentClassName="is-current">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#section-1">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#section-2">ABOUT ME</a></li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#section-3">RESUME/CV</a></li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PROJECTS
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{'marginTop':'0.5em'}}>
                            <li><a className="dropdown-item" href="#section-4">Home</a></li>
                            <li><a className="dropdown-item" href="#capstone">Capstone</a></li>
                            <li><a className="dropdown-item" href="#group">Group</a></li>
                            <li><a className="dropdown-item" href="#individual">Individual</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#section-5">CONTACT ME</a></li>
                </Scrollspy>
            </ul>
            </div>
        </div>
        </nav>
     );
}
 
export default NavBar;