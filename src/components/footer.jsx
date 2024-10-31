import React, { useState } from 'react';
import './footer.css';
import axios from 'axios';
import Descripcion from './Descripcion';
import { useNavigate } from 'react-router-dom';
function Footer() {

    const [title, setTitle] = useState(null)
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate()

    const SearchMovie = (e) => {
        if (title){
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e5b17a6c`)
            .then((res) => {
                if(res.data.Response === "True") {
                    console.log(res.data)
                    setMovie(res.data);
                }
            })
            .catch((err) => console.error("Error fetching movie", err))
        }
    }

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>DescubrePeli</h2>
                    <div className="social-media">
                        <a href="https://www.facebook.com/InstitutoRenault/?locale=es_LA">Facebook</a>
                        <a href="https://www.instagram.com/instituto_tecnico_renault/?hl=es">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Buscar una película?</h2>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Buscar por nombre..." className="search-input" />
                    <button type='onclick' onClick={SearchMovie}>Search Movie</button>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
