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

import "./MovieCards.css"
import { IMG_URL } from "../../globals/global";
import { formatRating, formatReleaseDate } from "../../utilities/toolbelts";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

    const navigate = useNavigate();
    return (
        <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="movie-poster-container">
                <img
                    src={`${IMG_URL}w342${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="backdrop">
                    <div className="title-and-release">
                        {/* <h3>{movie.title}</h3> */}
                        <p>{movie.overview}</p>
                        <p>{formatReleaseDate(movie.release_date)}</p>
                    </div>
                    <div className="rating-and-favorite">
                        <p id="rating">{formatRating(movie.vote_average)}</p>
                        <button>❤️</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;

