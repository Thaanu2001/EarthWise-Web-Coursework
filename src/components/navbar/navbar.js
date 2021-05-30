import './navbar.css';
import logo from '../../assets/earth-wise-logo.png';
import logoDark from '../../assets/earth-wise-logo-dark.png';

function NavBar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo-light" src={logo} height="34" alt=""></img>
        <img class="logo-dark" src={logoDark} height="34" alt=""></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Article</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Explore</a>
          </li>
        </ul>
        {/* <span class="navbar-text">
          Navbar text with an inline element
        </span> */}
      </div>
    </div>
  </nav>
  );
}

export default NavBar;