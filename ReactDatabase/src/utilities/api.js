const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function getPopularMovies() {
    return fetch(`${BASE_URL}/movie/popular?api_keys=${API_KEY}`)

}

export default getPopularMovies()
