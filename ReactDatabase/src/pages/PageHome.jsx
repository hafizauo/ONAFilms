import "./PageHome.css";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies } from "../utilities/api";
import { useState, useEffect } from "react";
import MovieCard from "../components/movies/MovieCards";
import RandomMovieBackdrop from "../components/movies/Backdrop";
import SecondNav from "../components/DropDown";

// Import Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function PageHome() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpComingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    

    useEffect(() => {
        getPopularMovies()
            .then((data) => setPopularMovies(data.results))
            .catch((error) => alert("Error fetching popular movies", error));
    }, []);

    useEffect(() => {
        getTopRatedMovies()
            .then((data) => setTopRatedMovies(data.results))
            .catch((error) => alert("Error fetching top-rated movies", error));
    }, []);

    useEffect(() => {
        getUpComingMovies()
            .then((data) => setUpComingMovies(data.results))
            .catch((error) => alert("Error fetching upcoming movies", error));
    }, []);

    useEffect(() => {
        getNowPlayingMovies()
            .then((data) => setNowPlayingMovies(data.results))
            .catch((error) => alert("Error fetching now playing movies", error));
    }, []);

    // Splide options with proper responsiveness
    const splideOptions = {
        type: "loop",
        perPage: 1, // Default (Mobile)
        perMove: 1,
        gap: "1rem",
        padding: "1rem", // Space around the slider
        pagination: false,
        autoplay: true,
        breakpoints: {

            400 : {
                perPage: 1, // Show 2 items
                gap: "1rem",
                padding: "1.5rem",
                arrows: false, // Hide arrows for mobile & tablet
            },

            600: { // Small tablets
                perPage: 2, // Show 2 items
                gap: "1rem",
                padding: "1.5rem",
                arrows: false, // Hide arrows for mobile & tablet
            },
            800: { // Large tablets
                perPage: 3, // Show 3 items
                gap: "1.5rem",
                padding: "2rem",
                arrows: false, // Hide arrows for mobile & tablet
            },
            1000: { // Small desktops
                perPage: 4, // Show 4 items
                gap: "2rem",
                padding: "3rem",
                arrows: true, // Enable arrows on desktops
            },
            1200: { // Large desktops
                perPage: 5, // Show 5 items
                gap: "2rem",
                padding: "3rem",
                arrows: true, // Enable arrows on desktops
            },

            1600: { // Large desktops
                perPage: 5, // Show 5 items
                gap: "2rem",
                padding: "3rem",
                arrows: true, // Enable arrows on desktops
            },

            2000: { // Large desktops
                perPage: 5, // Show 5 items
                gap: "2rem",
                padding: "3rem",
                arrows: true, // Enable arrows on desktops
            }
        },
    };
    

    return (
        <div className="homepage">
            <RandomMovieBackdrop />
            <SecondNav />
    
            {/* Popular Movies Section */}
            <div id="popular">
                <h2 className="slider-title">POPULAR MOVIES</h2>
                <Splide options={splideOptions}>
                    {popularMovies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <MovieCard movie={movie} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
    
            {/* Top Rated Movies Section */}
            <div id="top-rated">
                <h2 className="slider-title">TOP RATED MOVIES</h2>
                <Splide options={splideOptions}>
                    {topRatedMovies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <MovieCard movie={movie} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
    
            {/* Upcoming Movies Section */}
            <div id="upcoming">
                <h2 className="slider-title">UPCOMING MOVIES</h2>
                <Splide options={splideOptions}>
                    {upcomingMovies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <MovieCard movie={movie} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
    
            {/* Now Playing Movies Section */}
            <div id="now-playing">
                <h2 className="slider-title">NOW PLAYING MOVIES</h2>
                <Splide options={splideOptions}>
                    {nowPlayingMovies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <MovieCard movie={movie} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default PageHome;
