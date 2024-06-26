import "./Footer.css";
import Logo from "../../images/VotingAppLogo.png";
const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start"
        // style="background-color: #1c2331"
      >
        <section
          className="d-flex justify-content-xxl-center p-4 mb-2 newsletter"
          //   style="background-color: #6351ce"
        >
          <div className="me-5">
            <span>
              Zapisz się do newslettera aby zawsze być na bieżąco z wynikami
              głosowania!
            </span>
          </div>
          <div>
            {" "}
            <input />
            <button className="btn-cyan">Zapisz się!</button>
          </div>
        </section>

        <section className="main-footer-box">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src={Logo} className="va-logo" />
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Informacje</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" className="text-white">
                    O nas
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    O aplikacji
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Playlisty
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Warunki korzystania
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Polityka prywatności
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Przydatne linki</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" className="text-white">
                    Twoje konto
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Głosowanie tygodnia
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Głosowanie miesiąca
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    FAQs
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Kontakt</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <br />
                <a href="" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="text-left p-3 copyright">
          © 2024 Copyright
          <a className="text-white"> WEB4PRO</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
