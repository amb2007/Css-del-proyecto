import React, { useState } from "react";
import Banner from "../assets/catalogo.jpeg";
//import CategoriaEspecifica from "./CategoriaEspecifica.jsx";
import "./Categorias.css";
import { app } from "./db";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
// Importar Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faSearch } from "@fortawesome/free-solid-svg-icons";
import CategoriaEspecifica from "./CategoriaEspecifica";
//import Dropdown from "react-bootstrap/Dropdown";
const db = getFirestore(app);
function Categorias() {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para redirigir a la página de Preguntas
  const handleRedirect = () => {
    navigate("/preguntas"); // Redirige a la ruta de Preguntas
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
  const [Data, setData] = useState([])
    async function fetchData() {
        try {
          const docRef = doc(db, "Peliculas", Title);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
              setData(docSnap.data());
          } else {
            console.log("No se encontró el documento");
          }
        } catch (error) {
          console.error("Error al obtener el documento:", error);
        }
      }
      fetchData();
  const [selectedgenre, seSelectedGenre] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  // Función que maneja el cambio del estado del checkbox
  const handleCheckboxChange = (event) => {
    // Usamos event.target.checked para obtener el valor de marcado/desmarcado
    setIsChecked(event.target.checked);
    seSelectedGenre(event.target.value)
  };
  return (
    <div className="app-container">
      <img src={Banner} alt="Banner" className="banner" />
      <div className="text-container">
        <h1 className="title">Categorias</h1>
        <p className="description">
          Aquí puedes explorar diferentes categorías.
        </p>
        <div className="button-group">
          <button className="random-button" onClick={handleRedirect}>
            {" "}
            {/* Agrega onClick para redirigir */}
            <FontAwesomeIcon icon={faRandom} /> Aleatoria
          </button>
          
          {generos.map((genero) => {
            <>
            <input
            type="checkbox"
            id="notifications"
            checked={isChecked}
            onChange={handleCheckboxChange}
            value = {genero}
          />
          <label htmlFor={genero}>{genero}</label>
          </>
          })}
        </div>
      </div>
      <CategoriaEspecifica selectedgenre={selectedgenre}/>
    </div>
  );
}

export default Categorias;
