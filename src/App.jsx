import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Categorias';
import Principal from './components/Principal';
import CategoriaEspecifica from './components/CategoriaEspecifica';
import Description from './components/Descripcion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preguntas from './components/Preguntas';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div>
          <Routes>
            <Route path="/" element={<Principal />} /> 
            <Route path="/Categorias" element={<Category />} />
            <Route path="/Preguntas" element={<Preguntas />} />
            <Route path="/Descripcion" element={<Description />} />
            {<Route path="/CategoriaEspecifica" element={<CategoriaEspecifica />} />}
          </Routes>
          </div>
        <Footer />
      </div>
    </Router>
    </>

  );
}

export default App;
