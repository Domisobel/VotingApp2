import "./HomePage.css";
import musicPalyer from "../images/MusicOfTheMonth.png";

const HomePage = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex flex-column justify-content-center  align-items-center">
            <img src={musicPalyer} class="music-player" />
            <h3>Posłuchaj piosenki wybranej w marcu</h3>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <img src={musicPalyer} class="music-player" />
            <h3>Posłuchaj piosenki wybranej w kwietniu</h3>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <img src={musicPalyer} class="music-player" />
            <h3>Posłuchaj piosenki wybranej w maju</h3>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomePage;
