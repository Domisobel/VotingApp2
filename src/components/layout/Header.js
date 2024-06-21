import "./Header.css";
import logo from "../../images/HeaderLogo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img src={logo} id="HeaderLogo" alt="Voting App Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Strona Główna
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Głosowanie tygodnia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Głosowanie miesiąca
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn-cyan">Logowanie</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
