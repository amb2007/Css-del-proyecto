import React, { useState } from 'react';
import Banner from '../assets/catalogo.jpeg';
import CategoriaEspecifica from "./CategoriaEspecifica.jsx"
import './Categorias.css';
import { useNavigate } from 'react-router-dom';
// Importar Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faSearch } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
function Categorias() {

  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para redirigir a la página de Preguntas
  const handleRedirect = () => {
    navigate('/preguntas'); // Redirige a la ruta de Preguntas
  };
  const generos = [
    "Action",
    "Adventure ",
    "Animation ",
    "Biography ",
    "Comedy ",
    "Crime ",
    "Documentar",
    "Drama ",
    "Family ",
    "Fantasy ",
    "Film-Noir ",
    "History ",
    "Horror ",
    "Music ",
    "Musical ",
    "Mystery ",
    "Romance ",
    "Sci-Fi ",
    "Sport ",
    "Thriller ",
    "War ",
    "Western ",
  ];
  const [selectedgenre, seSelectedGenre] = useState('');
  const handleChange = (event) => {
    seSelectedGenre(event.target.value);
  };

  return (
    <div className="app-container">
      <img src={Banner} alt="Banner" className="banner" />
      <div className="text-container">
        <h1 className="title">Categorias</h1>
        <p className="description">Aquí puedes explorar diferentes categorías.</p>
        <div className="button-group">

          <button className="random-button" onClick={handleRedirect}> {/* Agrega onClick para redirigir */}
            <FontAwesomeIcon icon={faRandom} /> Aleatoria
          </button>
          {generos.map((genero)=> {
            <select onChange={handleChange}>
              <option value = {genero}>{genero}</option>
            </select>
            
          })
}
               </div>
      </div>

      
    </div>
  );
}

export default Categorias; 