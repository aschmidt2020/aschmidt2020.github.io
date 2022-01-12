const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">AUDREY SCHMIDT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">ABOUT ME</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">RESUME/CV</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PROJECTS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Home</a></li>
                    <li><a className="dropdown-item" href="#">Group</a></li>
                    <li><a className="dropdown-item" href="#">Individual</a></li>
                    <li><a className="dropdown-item" href="#">Capstone</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">CONTACT ME</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
     );
}
 
export default NavBar;