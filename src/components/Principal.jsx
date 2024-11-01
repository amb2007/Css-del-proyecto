import Preguntas from './Preguntas';
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

  const [isContentVisible, setIsContentVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const toggleContentVisibility = () => {
    setIsContentVisible(prevState => !prevState);
  };

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
    <div className='homePage bg-cover bg-center h-[35vh] w-[100vw] bg-[url("/img/home_dicovery.png")] text-center'>
      <h1 className='text-[#ba306a] text-4xl'>Título</h1>
      <p className='text-white text-2xl'>Click on the Vite and React logos to learn more</p>
      <p
        id='arrow0'
        className='arrows text-2xl text-[#3e3d3d] mt-5 cursor-pointer'
        onClick={toggleContentVisibility}
      >
        v
      </p>

      {isContentVisible && (
        <>
          <div className='discoveryBegins text-center bg-[#540d53] p-3 mt-10'>
            <h2 className='text-2xl text-black pl-8 mb-5'>¿No sabes qué película ver?</h2>
            <button
              id='discoveryButton'
              className='bg-[#f5167e] text-white px-5 py-2 rounded-full shadow-lg'
              onClick={handleButtonClick}
            >
              Inicia Descubrimiento
            </button>
            <div className="flex justify-start mt-4"> {/* Contenedor flex para alinear la imagen a la izquierda */}
              <img src="/img/homePageTitle.png" alt="Home Page Title" className="max-w-full h-auto" />
            </div>
          </div>
          <div className='certainCategories flex items-center justify-between my-10 relative'>
            <button className='arrows text-2xl text-[#ef629d] bg-transparent border-none absolute left-0 top-1/2 transform -translate-y-1/2' onClick={handlePrev}>←</button>
            <div className='categoryDisplay flex justify-center flex-1 min-w-[200px]'>
              {categories.slice(startIndex, startIndex + itemsToShow).map((category, index) => (
                <button
                  key={index}
                  className='buttonsCategStart bg-[#3e3d3d] text-[#ef629d] py-1 px-12 border-2 border-[#ef629d] rounded-lg m-4'
                >
                  {category}
                </button>
              ))}
            </div>
            <button className='arrows text-2xl text-[#ef629d] bg-transparent border-none absolute right-0 top-1/2 transform -translate-y-1/2' onClick={handleNext}>→</button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
