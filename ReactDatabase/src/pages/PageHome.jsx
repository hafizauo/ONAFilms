import "./PageHome.css";
// import logo from "../assets/logo.svg";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies } from "../utilities/api";
import { useState, useEffect } from "react";
import Movies from "../components/movies/Movies";
import RandomMovieBackdrop from "../components/movies/Backdrop";


function PageHome() {

    // Variable for storing popular movies data
    const [popularMovies, setPopularMovies] = useState([]);

    // Variable for storing top rated movies data
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    // Variable for storing upcoming movies data
    const [upcomingMovies, setUpComingMovies] = useState([]);

    // Variable for storing now playing movies data
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    // useEffect() for popular movies
    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                // console.log(data);
                setPopularMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching popular movies", error);
            });
    }, []);

    // useEffect() for top rated movies
    useEffect(() => {
        getTopRatedMovies()
            .then((data) => {
                // console.log(data);
                setTopRatedMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching popular movies", error);
            });
    }, []);

    // useEffect() for upcoming movies
    useEffect(() => {
        getUpComingMovies()
            .then((data) => {
                // console.log(data);
                setUpComingMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching upcoming movies", error);
            });
    }, []);

    // useEffect() for now playing movies
    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => {
                // console.log(data);
                setNowPlayingMovies(data.results);
            })
            .catch((error) => {
                alert("Error fetching now playing movies", error);
            });
    }, []);

    return (
        <div>
            <RandomMovieBackdrop />
            <h1>Home Page</h1>

            {/* Displaying popular movies */}
            <Movies title="POPULAR MOVIES" movies={popularMovies} classname="popular-container" />

            {/* Displaying top rated movies */}
            <Movies title="TOP RATED MOVIES" movies={topRatedMovies} classname="top-rated-container" />

            {/* Displaying upcoming movies */}
            <Movies title="UPCOMING MOVIES" movies={upcomingMovies} classname="upcoming-container" />

            {/* Displaying now playing movies */}
            <Movies title="NOW PLAYING MOVIES" movies={nowPlayingMovies} classname="now-playing-container" />

        </div>
    )

}

export default PageHome;

