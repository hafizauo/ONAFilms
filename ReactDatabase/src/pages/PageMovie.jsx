import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, getPersonImage, getMovieTrailer } from "../utilities/api";
import { IMG_URL } from "../globals/global";
import { formatRating, formatReleaseDate } from "../utilities/toolbelts";
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
    <div className="SingleMovie">
      <h1 className="MovieDetails"> Movie Details</h1>
      <div className="SingleMovieContainer">
        {movie && (
          <>
            <img src={`${IMG_URL}w780${movie.poster_path}`} alt={movie.title} />
            <div className="MovieDetailsInfo">
              <h2>{movie.title}</h2>
              <p className="SubDetailsInfo1">{movie.overview}</p>
              <p className="SubDetailsInfo2">{formatReleaseDate(movie.release_date)}</p>
              <p className="SubDetailsInfo2">{movie.runtime} minutes</p>
              <p className="SubDetailsInfo2" id="rating">⭐&nbsp;{formatRating(movie.vote_average)}</p>

               <button className="HeartFunction2" onClick={handleFavoriteClick}>
                    <img src={isFavorite ? "https://img.icons8.com/ios-filled/50/FF0000/like--v1.png" : "https://img.icons8.com/ios/50/FF0000/like--v1.png"} />
              </button>

            </div>
          </>
        )}
      </div>


      <br/><br/><br/><br/><br/> {/* Extra Spacing */}

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

      <br/><br/><br/><br/><br/> {/* Extra Spacing */}

      {/* Cast Section */}
      <h1 className="cast-heading">Cast</h1>

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
            1300: { perPage: 5, gap: "1rem" }, // Tablet
            1100: { perPage: 4, gap: "1rem" }, // Tablet
            900: { perPage: 3, gap: "1rem", arrows: false }, // Tablet
            750: { perPage: 2, gap: "1rem", arrows: false }, // Small Tablet
            500: { perPage: 1, gap: "1rem", arrows: false}, // Mobile
            320: { perPage: 1, gap: "0.5rem", arrows: false }, // Extra Small Screens
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

      <br/><br/><br/><br/><br/> {/* Extra Spacing */}

    </div>
    
  );
}



export default PageMovie;
