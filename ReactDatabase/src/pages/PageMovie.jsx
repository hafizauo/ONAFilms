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

        // Check if movie is in favorites after movie data is fetched
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
          const profilePaths = personImage.cast.map(
            (castMember) => castMember.profile_path
          );
          setPersonImage(profilePaths);

          const actorsData = personImage.cast.map((castMember) => ({
            name: castMember.name,
            character: castMember.character,
          }));
          setActor(actorsData);
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
      // Add movie to favorites
      favorites.push(movie);
    } else {
      // Remove movie from favorites
      favorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Navigate to favorites page
    navigate("/favourites");
  };

  return (
    <div className="single-movie">
      <h1 className="Movie Details"> Movie Details</h1>
      <div className="single-movie-container">
        {movie && (
          <>
            <img src={`${IMG_URL}w780${movie.poster_path}`} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p>{formatReleaseDate(movie.release_date)}</p>
              <p>{movie.runtime}</p>
              <p>{movie.overview}</p>
              <button onClick={handleFavoriteClick}>
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="cast-container">
        {personImage &&
          personImage.map((path, index) => {
            return path !== null ? (
              <img
                key={index}
                src={`${IMG_URL}w185${path}`}
                alt={`Cast member ${index + 1}`}
              />
            ) : null;
          })}

        {actor &&
          actor.map((actorInfo, index) => (
            <p key={index}>
              {actorInfo.name} as {actorInfo.character}
            </p>
          ))}
      </div>
    </div>
  );
}

export default PageMovie;