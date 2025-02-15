import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, getPersonImage } from "../utilities/api";
import { IMG_URL } from "../globals/global";
import { formatReleaseDate } from "../utilities/toolbelts";
import "./PageMovie.css";

function PageMovie() {
  const [movie, setMovie] = useState(null);
  const [personImage, setPersonImage] = useState(null);
  const [actor, setActor] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch movie details
  useEffect(() => {
    getMovieById(id)
      .then((movie) => {
        setMovie(movie);

        // Check if movie is in favorites
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
        setIsFavorite(isAlreadyFavorite);
      })
      .catch((error) => {
        alert("Error fetching movie by ID");
        console.error("Error fetching movie by ID:", error);
      });
  }, [id]);

  // Fetch cast and images
  useEffect(() => {
    getPersonImage(id)
      .then((personImage) => {
        if (personImage && personImage.cast) {
          setPersonImage(personImage.cast.map(cast => cast.profile_path));
          setActor(personImage.cast.map(cast => ({
            name: cast.name,
            character: cast.character
          })));
        }
      })
      .catch((error) => {
        alert("Error fetching cast details");
        console.error("Error fetching cast details:", error);
      });
  }, [id]);

  // Handle favorite click (Add/Remove from favorites)
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!isFavorite) {
      favorites.push(movie);
    } else {
      favorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    // navigate("/favourites");
  };

  return (
    <div className="single-movie">
      <h1 className="movie-details"> Movie Details</h1>
      <div className="single-movie-container">
        {movie && (
          <>
            <img src={`${IMG_URL}w780${movie.poster_path}`} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p>{formatReleaseDate(movie.release_date)}</p>
              <p>{movie.runtime} min</p>
              <p>{movie.overview}</p>
              <button onClick={handleFavoriteClick}>
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>
          </>
        )}
      </div>
      
      {/* Cast Section */}
      <h2 className="cast-heading">Cast</h2>
      <div className="cast-container">
        {personImage &&
          personImage.map((path, index) => (
            path !== null ? (
              <div key={index} className="cast-card">
                <img src={`${IMG_URL}w185${path}`} alt={`Cast member ${index + 1}`} />
                <p>{actor[index]?.name || "Unknown"}<br/> 
                <span className="character-name">as {actor[index]?.character || "N/A"}</span></p>
              </div>
            ) : null
          ))
        }
      </div>
    </div>
  );
}

export default PageMovie;
