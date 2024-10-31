import { useLocation } from "react-router-dom";
import Footer from './footer.jsx';
import './Descripcion.css';

function Descripcion() {
  const location = useLocation();
  const { movie } = location.state || {};

  // Convierte el runtime a horas y minutos
  const getDuration = (runtime) => {
    if (runtime && runtime.includes("min")) {
      const minutes = parseInt(runtime.split(" ")[0], 10);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return { hours, minutes: remainingMinutes };
    }
    return { hours: 1, minutes: 59 }; // Valor predeterminado
  };

  const duration = movie ? getDuration(movie.Runtime) : { hours: 1, minutes: 59 };

  return (
    <div className="page-container">
      <div className="image-section">
        {movie && movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} className="header-image" />
        ) : (
          <img src="scale.jpg" alt="Película" className="header-image" />
        )}
      </div>
      <div className="content-section">
        <div className="left-content">
          <h1>{movie ? movie.Title : "Nombre De La Película"}</h1>
          <p className="release-date">
            Fecha De Estreno {movie ? movie.Released : "Sep 30, 2022"}
          </p>
          <p className="author">
            Creada Por <span className="author-name">{movie ? movie.Director : "Nombre Del Autor"}</span>
          </p>
          <p className="description">
            {movie ? movie.Plot : "Descripcion"}
          </p>
          <div className="extra-details">
            <p><span className="detail-title">Detalles Extra</span></p>
            <p>🌍 Personajes: {movie ? movie.Actors : "Actores"}</p>
            <p>🌍 Idiomas: {movie ? movie.Language : "Idiomas"}</p>
          </div>
        </div>
        <div className="right-content">
          <div className="duration-box">
            <p>Duración:</p>
            <div className="countdown">
              <span>{duration.hours}</span>
              <p>Horas</p>
              <span>{duration.minutes}</span>
              <p>Minutos</p>
            </div>
          </div>
          <button className="discover-button">Descubre más</button>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;