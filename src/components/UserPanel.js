import "./UserPanel.css";
import React, { useState, useEffect } from "react";



const UserPanel = () => {
  const [activeButton, setActiveButton] = useState("user-info");
  const [showModal, setShowModal] = useState(false);
  const [activeCollapse, setActiveCollapse] = useState(null);

  const toggleCollapse = (collapseId) => {
    setActiveCollapse(activeCollapse === collapseId ? null : collapseId);
  };


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" || e.key === "Shift") {
      if (showModal) {
        closeModal();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  return (
    <div className="container mt-3 mb-3 mt-sm-5 mb-sm-5 custom-container">
      <div className="row cc">
        <div className="col-12 col-md-12 col-lg-5">
          <div className="p-3 d-flex flex-column justify-content-evenly align-items-center first-column">
            <button
              type="button"
              className={`btn btn-width votes ${
                activeButton === "votes" ? "active" : ""
              }`}
              onClick={() => setActiveButton("votes")}
            >
              Głosy oddane dzisiaj
            </button>
            <button
              type="button"
              className={`btn btn-width user-info ${
                activeButton === "user-info" ? "active" : ""
              }`}
              onClick={() => setActiveButton("user-info")}
            >
              Informacje podstawowe
            </button>
            <button
              type="button"
              className={`btn btn-width settings ${
                activeButton === "settings" ? "active" : ""
              }`}
              onClick={() => setActiveButton("settings")}
            >
              Dodatkowe ustawienia
            </button>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-7">
          <div className="p-3 second-column">
            {activeButton === "votes" && (
              <div className="votes-content">
                <h1 className="votes-heading text-center py-4">
                  Głosy oddane dzisiaj
                </h1>
                {/* Dodaj treść dla głosów */}
              </div>
            )}
            {activeButton === "user-info" && (
              <div className="user-content d-flex flex-column h-100">
                <h1 className="user-name text-center py-4">Użytkownik</h1>

                <p className="user-data user-data-name">E-mail: </p>
                <p className="user-data user-data-password">Hasło: </p>

                <div className="newsletter-form mt-auto">
                  <div className="form-check custom-form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Zapis do newslettera
                    </label>
                  </div>
                </div>
                <p
                  className="delete-account mt-5 show-modal"
                  onClick={openModal}
                >
                  usuń konto
                </p>

                {/* Modal*/}
                <div
                  className={`modal fade ${
                    showModal ? "show d-block" : "d-none"
                  }`}
                  tabIndex="-1"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">
                          Przykro nam, że nas opuszczasz
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          onClick={closeModal}
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <p>
                          Ta operacja jest nieodwracalna i stracisz wszystkie
                          swoje zapisane głosowania. Czy na pewno chcesz
                          kontynuować usuwanie konta?
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          onClick={closeModal}
                          data-bs-dismiss="modal"
                        >
                          Nie, zatrzymaj usuwanie
                        </button>
                        <button type="button" class="btn btn-primary">
                          Tak, usuń moje konto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay */}
                {showModal && (
                  <div
                    className="modal-backdrop fade show"
                    onClick={closeModal}
                  ></div>
                )}
              </div>
            )}
            {activeButton === "settings" && (
              <div className="additional-settings-content">
                <h1 className="settings-heading text-center py-4">
                  Dodatkowe ustawienia
                </h1>
                {/* Dodaj treść dla dodatkowych ustawień */}
                <div className="container mt-3 mb-3 mt-sm-5 mb-sm-5 custom-container">
      <div className="row">
        <p className="d-inline-flex gap-1">
          <button
            className="btn btn-primary"
            onClick={() => toggleCollapse("collapse1")}
            aria-expanded={activeCollapse === "collapse1"}
            aria-controls="multiCollapseExample1"
          >
           Zmiana nazwy użytkownika
          </button>
          <button
            className="btn btn-primary"
            onClick={() => toggleCollapse("collapse2")}
            aria-expanded={activeCollapse === "collapse2"}
            aria-controls="multiCollapseExample2"
          >
            Zmiana hasła
          </button>
        </p>
        <div className="col-12">
          <div
            className={`collapse ${activeCollapse === "collapse1" ? "show" : ""}`}
            id="multiCollapseExample1"
          >
            <div className="card card-body">
              <p>Zmiana nazwy użytkownika <input></input></p>
              <button type="button" class="btn btn-primary">Zapisz</button>

            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className={`collapse ${activeCollapse === "collapse2" ? "show" : ""}`}
            id="multiCollapseExample2"
          >
            <div className="card card-body">
              <p>Stare hasło <input></input></p>
              <p>Nowe hasło <input></input></p>
              <p>Powtórz nowe hasło <input></input></p>
              <button type="button" class="btn btn-primary">Zapisz</button>

            </div>
          </div>
        </div>
      </div>
    </div>
               {/*koniec*/}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
