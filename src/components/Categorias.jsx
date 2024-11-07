import React from 'react'; 
import Banner from '../assets/catalogo.jpeg';
import './Categorias.css';
import { useNavigate } from 'react-router-dom'; 
// Importar Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faRandom, faSearch } from '@fortawesome/free-solid-svg-icons'; 

function Categorias() {

  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para redirigir a la página de Preguntas
  const handleRedirect = () => {
    navigate('/preguntas'); // Redirige a la ruta de Preguntas
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
         
          <button className="specific-button">
            <FontAwesomeIcon icon={faSearch} /> Específica 
          </button>   
        </div>
      </div>
      
    </div>
  );
}

export default Categorias; 