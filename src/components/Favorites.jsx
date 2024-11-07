import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import './Favoritos.css';

function Favoritos() {
  const location = useLocation();
  const { favorites } = location.state || { favorites: [] }; // Obtener la lista de favoritos
  const navigate = useNavigate();

  const goToDescription = (movie) => {
    navigate('/Descripcion', { state: { movie } }); // Redirigir a la descripción de la película
  };

  return (
    <div className="favoritos-container">
      <h1>Mis Películas Favoritas</h1>
      {favorites.length === 0 ? (
        <p>No tienes películas en favoritos.</p>
      ) : (
        <ul className="favoritos-list">
          {favorites.map((movie) => (
            <li key={movie.imdbID} className="favorito-item">
              <div className="favorito-info">
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
              </div>
              <button onClick={() => goToDescription(movie)} className="description-button">
                Ver Detalles
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;
