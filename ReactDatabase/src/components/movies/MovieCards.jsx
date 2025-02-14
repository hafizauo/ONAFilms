// Object { adult: false, backdrop_path: "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg", belongs_to_collection: {…}, budget: 122000000, genres: (4) […], homepage: "https://www.sonicthehedgehogmovie.com", id: 939243, imdb_id: "tt18259086", origin_country: (1) […], original_language: "en", … }
// adult: false
// backdrop_path: "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg"
// belongs_to_collection: Object { id: 720879, name: "Sonic the Hedgehog Collection", poster_path: "/fwFWhYXj8wY6gFACtecJbg229FI.jpg", … }
// budget: 122000000
// genres: Array(4) [ {…}, {…}, {…}, … ]
// homepage: "https://www.sonicthehedgehogmovie.com"
// id: 939243
// imdb_id: "tt18259086"
// origin_country: Array [ "US" ]
// original_language: "en"
// original_title: "Sonic the Hedgehog 3"
// overview: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet."
// popularity: 3180.548
// poster_path: "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"
// production_companies: Array(6) [ {…}, {…}, {…}, … ]
// production_countries: Array [ {…}, {…} ]
// release_date: "2024-12-19"
// revenue: 462549154
// runtime: 110
// spoken_languages: Array [ {…} ]
// status: "Released"
// tagline: "Try to keep up."
// title: "Sonic the Hedgehog 3"
// video: false
// vote_average: 7.776
// vote_count: 1585

import "./MovieCards.css";
import { IMG_URL } from "../../globals/global";
import { formatRating, formatReleaseDate } from "../../utilities/toolbelts";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    // Initialize the heart state based on local storage
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isAlreadyFavorite = favorites.some(fav => fav.id === movie.id);
        setIsFavorite(isAlreadyFavorite); // Set initial favorite state
    }, [movie.id]);

    // Prevent navigation when heart button is clicked
    const handleHeartClick = (e) => {
        e.stopPropagation();  // Prevent the navigation when clicking the heart button

        // Get the current favorites from local storage
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorite) {
            // Remove movie from favorites if it's already in there
            favorites = favorites.filter(fav => fav.id !== movie.id);
        } else {
            // Add the movie to favorites if it's not already there
            favorites.push(movie);
        }

        // Save the updated favorites list back to local storage
        localStorage.setItem("favorites", JSON.stringify(favorites));

        // Toggle the heart state
        setIsFavorite(!isFavorite);
    };

    const truncateOverview = (overview, maxLength) => {
        if (overview.length <= maxLength) return overview;
        return overview.slice(0, maxLength) + '...';
    };

    return (
        <div className="movie-card">
            <div className="movie-poster-container">
                <img
                    src={`${IMG_URL}w342${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="backdrop" onClick={() => navigate(`/movie/${movie.id}`)}>
                    <div className="title-and-release">
                        <h3>{movie.title}</h3>
                        <p>{truncateOverview(movie.overview, 100)}</p>
                        <p><span className="MovieHighlight">{formatReleaseDate(movie.release_date)}</span></p>
                    </div>
                    <div className="rating-and-favorite">
                        <p id="rating">⭐&nbsp;{formatRating(movie.vote_average)}</p>
                        <button className="HeartFunction" onClick={handleHeartClick}>
                            <img src={isFavorite ? "https://img.icons8.com/ios-filled/50/FF0000/like--v1.png" : "https://img.icons8.com/ios/50/FF0000/like--v1.png"} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;