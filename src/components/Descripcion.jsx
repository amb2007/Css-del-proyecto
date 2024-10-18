import Footer from './footer.jsx';
import './Descripcion.css'

function Descripcion() {

  return (
<div className="page-container">
      <div className="image-section">
        <img 
          src="scale.jpg" 
          alt="Película" 
          className="header-image" 
        />
      </div>
      <div className="content-section">
        <div className="left-content">
          <h1>Nombre De La Película</h1>
          <p className="release-date">Fecha De Estreno Sep 30, 2022</p>
          <p className="author">Creada Por <span className="author-name">Nombre Del Autor</span></p>
          <p className="description">
            Thscxbnxbnxn is a collection of 10,000 unique NFTs on the Ethereum blockchain.<br /><br />
            There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.<br /><br />
            They live in a metal space machines, high up in the sky and only have one foot on Earth.
            These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations.
            The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not
            know any other way to be. Upside-Downs believe that they will be able to win this war if they could only
            get an eye into Orbitian territory, so they've taken to make human beings their target.
          </p>
          <div className="extra-details">
            <p><span className="detail-title">Detalles Extra</span></p>
            <p>🌍 Personajes</p>
            <p>🌍 Idiomas</p>
          </div>
        </div>
        <div className="right-content">
          <div className="duration-box">
            <p>Duración:</p>
            <div className="countdown">
              <span>59</span> : <span>59</span> : <span>59</span>
              <p>Hours Minutes Seconds</p>
            </div>
          </div>
          <button className="discover-button">Descubre más</button>
        </div>
      </div> 
    </div>
  )
};

export default Descripcion