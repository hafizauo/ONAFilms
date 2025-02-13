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
        <main className="FavoriteContainer">
            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <section>
                        <p>You Haven&apos;t Favorited Any Movies Yet ￣へ￣</p>
                        <p>If you would like to favorite a movie, please click the heart icon on the main page!</p>
                    </section>
                ) : (
                    <>  
                    <section>
                        <button onClick={clearFavorites} className="clear-favorites-btn">
                            Clear All Favorites
                        </button>
                        {favorites.map((movie) => (
                            <div key={movie.id} className="favorite-movie">
                                <img
                                    src={`${IMG_URL}w342${movie.poster_path}`}
                                    alt={movie.title}
                                    className="favorite-movie-image"/>
                            </div>
                        ))}
                    </section>
                    </>
                )}
            </div>
        </main>
    );
}

export default PageFavourites;