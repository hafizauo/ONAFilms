import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getPersonImage } from "../utilities/api";
import { IMG_URL } from "../globals/global";
import { formatReleaseDate } from "../utilities/toolbelts";

function PageMovie() {

    // variable that store the movie data
    const [movie, setMovie] = useState(null);

    // variable that store the cast profile
    const [personImage, setPersonImage] = useState(null);

    // variable that store the cast name
    const [actor, setActor] = useState([]);

    // variable that store the cast character name

    const { id } = useParams();

    // Get movie
    useEffect(() => {
        getMovieById(id)
            .then((movie) => {
                setMovie(movie);
            })
            .catch((error) => {
                alert("Error fetching movie by ID");
                console.error("Error fetching movie by ID:", error);
            });
    }, [id]);

    // Get personImage
    useEffect(() => {
        getPersonImage(id)
            .then((personImage) => {

                // Copilot codes
                if (personImage && personImage.cast) {
                    // The personImage.cast goes into the cast in the api data
                    // Then it map out every profile_path in the cast array
                    // Finally it updates the state of the personImage with profilePaths
                    const profilePaths = personImage.cast.map((castMember) => castMember.profile_path);
                    setPersonImage(profilePaths); // Update the state with profile paths

                    // The personImage.cast goes into the cast in the api data
                    // Then it map out every name and character in the cast array
                    // Finally it updates the state of the personImage with actorsData
                    // This time it's different from the personImage because I'm storing 2 types of data instead of one
                    // By using an empty array in the useState function, it's easier to store and access the data
                    const actorsData = personImage.cast.map((castMember) => ({
                        name: castMember.name,
                        character: castMember.character
                    }));
                    setActor(actorsData); // Update the state with actor data
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
                {personImage &&
                    // Copilot codes
                    personImage.map((path, index) => {
                        // .map() will return the value of personImage 
                        // Sometimes the value will be null since the personImage is set to null in the useState()
                        // To make sure any img with a path that is equal to null doesn't get rendered
                        // return is needed because the .map() is always expected to return a value for each item in the array
                        // Conditional operator is needed so that when the path is not null, the image gets rendered
                        // Whereas if the path is equal to null, .map() will just return value as null and img doesn't get rendered
                        return path !== null ? (
                            <img key={index} src={`${IMG_URL}w185${path}`} alt={`Cast member ${index + 1}`} />
                        ) : null;
                    })
                }

                {actor &&
                    // Copilot codes
                    actor.map((actorInfo, index) => (
                        // actorInfo is now the same as actor which means it can access all the data inside the cast array from personImage
                        <p key={index}>{actorInfo.name} as {actorInfo.character}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default PageMovie;