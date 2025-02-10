import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getPersonImage } from "../utilities/api";
import { IMG_URL } from "../globals/global";
import { formatReleaseDate } from "../utilities/toolbelts";

function PageMovie() {

    // variable that store the movie data
    const [movie, setMovie] = useState(null);

    // variable that store the movie cast credits
    const [personImage, setPersonImage] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        getMovieById(id)
            .then((movie) => {
                console.log(movie);
                setMovie(movie);
            })
            .catch((error) => {
                alert("Error fetching movie by ID");
                console.error("Error fetching movie by ID:", error);
            });
    }, [id]);

    useEffect(() => {
        getPersonImage(id)
            .then((personImage) => {
                // console.log(personImage);
                // console.log(personImage.cast[0].profile_path);
                // setPersonImage(personImage.cast[0].profile_path);
                if (personImage && personImage.cast) {
                    const profilePaths = personImage.cast.map((castMember) => castMember.profile_path);
                    console.log(profilePaths);
                    setPersonImage(profilePaths); // Update the state with profile paths
                }
            })
            .catch((error) => {
                alert("Error fetching movie by ID");
                console.error("Error fetching movie by ID:", error);
            });
    }, [id]);

    return (
        <div className="single-movie">
            <div className="single-movie-container">
                {movie &&
                    <>
                        <img src={`${IMG_URL}w780${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{formatReleaseDate(movie.release_date)}</p>
                        <p>{movie.runtime}</p>
                        <p>{movie.overview}</p>
                        <button>❤️</button>
                    </>
                }
            </div>
            <div className="cast-container">
                {/* {personImage &&
                    <>
                        <img src={`${IMG_URL}w185${personImage}`} alt={personImage.profile_path} />
                    </>
                } */}
                {personImage.length > 0 &&
                    personImage.map((path, index) => (
                        <img key={index} src={`${IMG_URL}w185${path}`} alt={`Cast member ${index + 1}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default PageMovie;