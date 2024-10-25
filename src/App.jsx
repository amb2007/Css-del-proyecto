import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Categorias';
import Principal from './components/Principal';
import Questions from './components/Preguntas';
import SpecificCategory from './components/CategoriaEspecifica';
import Description from './components/Descripcion';
import Footer from './components/footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} /> 
        <Route path="/Categorias" element={<Category />} />
        <Route path="/Preguntas" element={<Questions />} />
        <Route path="/Descripcion" element={<Description />} />
        <Route path="/CategoriaEspecifica" element={<SpecificCategory />} />
      </Routes>
      <Footer /> {Footer}
    </Router>
    
    </>
    
  );
}

export default App;
