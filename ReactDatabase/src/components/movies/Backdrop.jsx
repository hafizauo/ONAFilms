import "./Backdrop.css"
import { IMG_URL } from "../../globals/global";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../../utilities/api";
function Backdrop({ movie }) {
    return (
        <div className="backdrop-container" >
            <img
                src={`${IMG_URL}w780${movie.backdrop_path}`}
                alt={movie.title}
            />
        </div>
    )
}
// Main component to fetch and select a random movie
function RandomMovieBackdrop() {
    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null);
    // useEffect() + getPopularMovies() to fetch the api data that has the backdrop_path
    useEffect(() => {
        getPopularMovies()
            .then(data => {
                // console.log(data.results);
                setMovies(data.results);
                // data.results gives an array of movie datas
                // Math.random() * data.results.length =>
                // This multiplies the random number (between 0 and 1) by the total number of movies, resulting in a random number between 0 and data.results.length - 1.
                setRandomMovie(data.results[Math.floor(Math.random() * data.results.length)]);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);
    return (
        <div>
            {/*
                If the randomMovie is not null.
                That means the data has been fetched and it will pass down the value to Backdrop component.
                If the randomMovie is null.
                The text 'Loading...' will get rendered, this shows a loading message to the use until the data is fetched.
             */}
            {randomMovie ? <Backdrop movie={randomMovie} /> : 'Loading...'}
        </div>
    );
}
export default RandomMovieBackdrop;