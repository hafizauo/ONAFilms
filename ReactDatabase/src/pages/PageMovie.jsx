import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, getPersonImage, getMovieTrailer } from "../utilities/api";
import { IMG_URL } from "../globals/global";
import { formatReleaseDate } from "../utilities/toolbelts";
import "./PageMovie.css";

// Import Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function PageMovie() {
  const [movie, setMovie] = useState(null);
  const [personImage, setPersonImage] = useState([]);
  const [actor, setActor] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailerKey, setTrailterKey] = useState(null);

  // ✅ Restore trailer fetching logic
  useEffect(() => {
    getMovieTrailer(id)
      .then((trailer) => {
        trailer.results.forEach((video) => {
          if (video.type === "Trailer") {
            console.log("Trailer found:", video.key);
            setTrailterKey(video.key);
          }
        });
      })
      .catch((error) => {
        alert("Error fetching movie trailer by ID");
        console.error("Error fetching movie trailer by ID:", error);
      });
  }, [id]);

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
          setPersonImage(personImage.cast.map((cast) => cast.profile_path));
          setActor(
            personImage.cast.map((cast) => ({
              name: cast.name,
              character: cast.character,
            }))
          );
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

      {/* ✅ Restored Trailer Section */}
      <div className="trailer-container">
        <h1 className="movie-details"> Movie Trailer</h1>
        {trailerKey ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}
      </div>

      {/* Cast Section */}
      <h2 className="cast-heading">Cast</h2>

      {/* ✅ Splide Cast Slider */}
      <Splide
        options={{
          type: "loop",
          perPage: 6, // Default (Desktop)
          perMove: 1,
          gap: "1rem",
          padding: "1rem",
          pagination: false,
          autoplay: true,
          breakpoints: {
            800: { perPage: 4, gap: "1rem" }, // Tablet
            600: { perPage: 3, gap: "1rem" }, // Small Tablet
            400: { perPage: 2, gap: "1rem" }, // Mobile
            320: { perPage: 1, gap: "0.5rem" }, // Extra Small Screens
          },
        }}
      >
        {personImage &&
          personImage.map((path, index) =>
            path !== null ? (
              <SplideSlide key={index}>
                <div className="cast-card">
                  <img src={`${IMG_URL}w185${path}`} alt={`Cast member ${index + 1}`} />
                  <p>
                    {actor[index]?.name || "Unknown"}
                    <br />
                    <span className="character-name">as {actor[index]?.character || "N/A"}</span>
                  </p>
                </div>
              </SplideSlide>
            ) : null
          )}
      </Splide>
    </div>
  );
}

export default PageMovie;
