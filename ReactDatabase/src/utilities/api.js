const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function getPopularMovies() {
    return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch popular movies");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching popular movies:", error);
            throw error;
        });
}

function getMovieById(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Newwork response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching movie by ID:", error);
            throw error;
        });
}

function getPersonImage(id) {
    return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Newwork response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching movie by ID:", error);
            throw error;
        });
}


export { getPopularMovies, getMovieById, getPersonImage };