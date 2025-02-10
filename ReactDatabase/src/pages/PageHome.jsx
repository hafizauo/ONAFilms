import "./PageHome.css";
import logo from "../assets/logo.svg";
import { getPopularMovies } from "../utilities/api";
import { useState, useEffect } from "react";
import Movies from "../components/movies/Movies";


function PageHome() {

    const [popularMovies, setPopularMovies] = useState([]);

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

    return (
        <div>
            <h1>Home Page</h1>
            <Movies title="POPULAR MOVIES" movies={popularMovies} />
        </div>
    )

}

export default PageHome;

