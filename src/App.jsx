import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categorias from './components/Categorias';
import InicioSesion from './components/InicioSesion';
import Principal from './components/Principal';
import Preguntas from './components/Preguntas';
import CategoriaEspecifica from './components/CategoriaEspecifica';
import Descripcion from './components/Descripcion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Principal" element={<Principal />} /> 
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/" element={<InicioSesion />} />
        <Route path="/Preguntas" element={<Preguntas />} />
        <Route path="/Descripcion" element={<Descripcion />} />
        <Route path="/CategoriaEspecifica" element={<CategoriaEspecifica />} />
      </Routes>
    </Router>
  );
}

export default App;
