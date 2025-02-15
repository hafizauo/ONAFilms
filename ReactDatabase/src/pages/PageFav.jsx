import "./PageFav.css"

import { useState, useEffect } from "react";
import { IMG_URL } from "../globals/global";
import { Link } from "react-router-dom";
import Heart from "../assets/Heart.svg";
import { useNavigate } from "react-router-dom";
import { formatRating, formatReleaseDate } from "../utilities/toolbelts";

function PageFavourites() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

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
            <h1>Your Favorites</h1>
            <div className="favorites-container">
                {favorites.length === 0 ? (
                    <section className="FavoriteHide">
                        <article className="FHDetails">
                            <p>You Haven&apos;t Favorited Any Movies Yet ￣へ￣</p>
                            <p>If you would like to favorite a movie, please click the heart icon on the main page!</p>
                        </article>
                        <div className="HeartContainer">
                            <Link to="/home"><img src={Heart} alt="Heart-Icon" className="HeartSvg" /></Link>
                        </div>
                    </section>

                ) : (

                    <>  

                        <section className="FavoriteShow">

                            <article className="FavoritedDetails">
                                <p>Your Current Favorited Movies Are Listed Below</p>
                                <p>If you would like to unfavorite a movie, please click
                                    the heart or clear all button!
                                </p>
                                <div className="buttonContainer">
                                    <button onClick={clearFavorites} className="clear-favorites-btn">Clear All Favorites</button>
                                </div>
                            </article>

                            <article className="MovieContainer2">
                                {favorites.map((movie) => (
                                    <div key={movie.id} className="favorite-movie">
                                        <img src={`${IMG_URL}w342${movie.poster_path}`}alt={movie.title}className="favorite-movie-image"/>
                                    
                                        <div className="backdrop2" onClick={() => navigate(`/movie/${movie.id}`)} >
                                            <div className="title-and-release" >
                                                {/* <h3>{movie.title}</h3> */}
                                                <p>{movie.overview}</p>
                                                <p>{formatReleaseDate(movie.release_date)}</p>
                                            </div>
                                            <div className="rating-and-favorite">
                                            <p id="rating">⭐&nbsp;{formatRating(movie.vote_average)}</p>
                                            </div>
                                        </div>


                                       
                                        
                                    </div>
                                ))}
                            </article>
                            
                        </section>

                    </>
                )}
            </div>
        </main>
    );
}

export default PageFavourites;