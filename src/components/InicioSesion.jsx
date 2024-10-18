
  
import { Link } from 'react-router-dom';
import Footer from './footer';


function Principal() {
  return (
    <div>
      <h1>Página Principal</h1>
      
      <nav>
        <Link to="/iniciar-sesion">Inicio de Sesión</Link>
        <Link to="/categorias">Categorías</Link>
        <Link to="/preguntas">Preguntas</Link>
        <Link to="/descripcion">Descripción</Link>
        <Link to="/CategoriaEspecifica">CategoriaEspecifica</Link>
      </nav>
      <Footer /> {Footer}
    </div>
  );
}

export default Principal; 