import './Navbar.css';
import './SingUpAndLogin.css'
import Login from "./Login";
import { useState } from 'react';
import Signup from "./Signup";

function Navbar() {
    const [SignupIsOpen, SetSignupIsOpen] = useState(false);
    const [LoginIsOpen, SetLoginIsOpen] = useState(false);
    const [IdAcount, SetIdAcount] = useState("")
    return (
        <nav>
            {SignupIsOpen && <div className='background' onClick={() => SetSignupIsOpen(false)}>
                .
            </div>}
            {LoginIsOpen && <div className='background' onClick={() => SetLoginIsOpen(false)}>
                .
            </div>}
            {SignupIsOpen && <Signup send={SetIdAcount}></Signup>}
            {LoginIsOpen && <Login send={SetIdAcount}></Login>}
            <img id="logo" src="INCLUIR_RUTA_DE_IMAGEN" ></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Principal">Front page</a></li>
                <li><a href="/Categorias">Genders</a></li>
                <li><a href="/Preguntas">Questions</a></li>
                <li><a href="/Descripcion">Description</a></li>
                <li><a href="#">Favorites</a></li>
            </ul>
            <div>
                <button onClick={() => SetLoginIsOpen(true)} id="Login">Login</button>
                <button onClick={() => { SetSignupIsOpen(true) }} id="register">Signup</button>

            </div>

        </nav>
    );
}

export default Navbar;