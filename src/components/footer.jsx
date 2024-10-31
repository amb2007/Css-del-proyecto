import React, { useState } from 'react';
import './footer.css';

function Footer() {
/*
    const [title, setTitle] = useState(null)

    const SearchMovie = (e) => {
        axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e5b17a6c`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.error("Error fetching movie", err))
            .finally(() => setLoader(false));
    }
*/
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
                    <input type="text" placeholder="Buscar por nombre..." className="search-input" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
