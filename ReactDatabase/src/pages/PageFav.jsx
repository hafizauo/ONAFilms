import "./PageFav.css"

import { useState, useEffect } from "react";
import { IMG_URL } from "../globals/global";

function PageFavourites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Retrieve favorites from local storage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // Clear all favorites
    const clearFavorites = () => {
        // Remove favorites from local storage
        localStorage.removeItem("favorites");
        // Update state to reflect the change in UI
        setFavorites([]);
    };

    return (
        <div>
            <h1>Favorites Page</h1>

            {/* Clear All Favorites button */}
            <button onClick={clearFavorites} className="clear-favorites-btn">
                Clear All Favorites
            </button>

            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <p>No favorites yet!</p>
                ) : (
                    favorites.map((movie) => (
                        <div key={movie.id} className="favorite-movie">
                            <img
                                src={`${IMG_URL}w342${movie.poster_path}`}
                                alt={movie.title}
                                className="favorite-movie-image"
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PageFavourites;