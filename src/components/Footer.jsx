import React, { useState } from 'react';
import './footer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const [title, setTitle] = useState('');
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const SearchMovie = () => {
        if (title.trim()) {
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e5b17a6c`)
                .then((res) => {
                    if (res.data.Response === "True") {
                        setMovie(res.data);
                        setError(null); 
                        navigate('/Descripcion', { state: { movie: res.data } });
                    } else {
                        setMovie(null);
                        setError('Película no encontrada. Intenta con otro nombre.');
                    }
                })
                .catch((err) => {
                    console.error("Error fetching movie", err);
                });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            SearchMovie();
        }
    };

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>DescubrePeli</h2>
                    <div className="social-media">
                        <a href="https://www.facebook.com/InstitutoRenault/?locale=es_LA">Facebook</a>
                        <br></br>
                        <a href="https://www.instagram.com/instituto_tecnico_renault/?hl=es">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Buscar una película</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Buscar por nombre..."
                        className="search-input"
                        style={{ marginRight: '8px' }} 
                    />
                    <button onClick={SearchMovie}>Buscar Película</button>
                    {error && <p className="error-message" style={{marginTop: '6px'}}>{error}</p>}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
