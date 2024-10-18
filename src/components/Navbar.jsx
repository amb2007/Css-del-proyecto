import './Navbar.css';

function Navbar() {
    return (
        <>
            <img id="logo" src="INCLUIR_RUTA_DE_IMAGEN" ></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Principal">Front page</a></li>
                <li><a href="/Categorias">Genders</a></li>
                <li><a href="/Preguntas">Questions</a></li>
                <li><a href="/Descripcion">Description</a></li>
                <li><a href="#">Favorites</a></li>
                   
            </ul>
        </>
    );
}

export default Navbar;