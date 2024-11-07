import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const goToDescription = (movie) => {
    navigate('/Descripcion', { state: { movie } });
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
