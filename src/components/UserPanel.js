import "./UserPanel.css";
import React, { useState, useEffect } from "react";

const UserPanel = () => {
  const [activeButton, setActiveButton] = useState("user-info");
  const [showModal, setShowModal] = useState(false);

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
                <p>Głosy oddane dzisiaj</p>
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
                <p className="delete-account mt-5 show-modal" onClick={openModal}>usuń konto</p>

                {/* Modal*/}
                <div className={`modal fade ${showModal ? "show d-block" : "d-none"}`} tabIndex="-1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Przykro nam, że nas opuszczasz</h5>
                        <button
                          type="button"
                          class="btn-close" onClick={closeModal}
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <p>Ta operacja jest nieodwracalna i stracisz wszystkie swoje zapisane głosowania. Czy na pewno chcesz kontynuować usuwanie konta?</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class='btn btn-secondary' onClick={closeModal}
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
                  <div className="modal-backdrop fade show" onClick={closeModal}></div>
                )}
              </div>
            )}
            {activeButton === "settings" && (
              <div className="additional-settings-content">
                <p>Dodatkowe ustawienia</p>
                {/* Dodaj treść dla dodatkowych ustawień */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
