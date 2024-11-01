import Preguntas from './Preguntas';
import './Principal.css';
  import { useState } from 'react';

function HomePage() {
  const categories = [
    'Terror',
    'Drama',
    'Romance',
    'Acción',
    'Ciencia Ficción',
    'Comedia',
    'Aventura',
    'Suspenso'
  ];

  const [isContentVisible, setIsContentVisible] = useState(false); // Estado para controlar la visibilidad del contenido

  const toggleContentVisibility = () => {
    setIsContentVisible(prevState => !prevState); // Alterna la visibilidad del contenido
  };

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsToShow) % categories.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsToShow + categories.length) % categories.length);
  };
  const handleButtonClick = () => {
    window.location.href = "/Preguntas"; 
  };

  return (
    <div className='homePage'>
      <h1>Título</h1>
      <p>Click on the Vite and React logos to learn more</p>
      <p id='arrow0' className='arrows' onClick={toggleContentVisibility}>v</p>
      
      {isContentVisible && ( // Solo muestra el siguiente contenido si isContentVisible es true
        <>
          <div className='discoveryBegins'>
            <h2>¿No sabes qué película ver?</h2>
            <button id='discoveryButton'  onClick={handleButtonClick}>Inicia Descubrimiento</button>
            <img src="/img/homePageTitle.png" alt="Home Page Title" />
          </div>
          <div className='certainCategories'>
            <button className='arrows' onClick={handlePrev}>←</button>
            <div className='categoryDisplay'>
              {categories.slice(startIndex, startIndex + itemsToShow).map((category, index) => (
                <button key={index} className='buttonsCategStart'>{category}</button>
              ))}
            </div>
            <button className='arrows' onClick={handleNext}>→</button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
