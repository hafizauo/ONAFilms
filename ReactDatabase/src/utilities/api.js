const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Function for getting popular movies data
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

// Function for getting top rated movies data
function getTopRatedMovies() {
    return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch top rated movies");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching top rated movies:", error);
            throw error;
        });
}

// Function for getting upcoming movies data
function getUpComingMovies() {
    return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch upcoming movies");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching upcoming movies:", error);
            throw error;
        });
}

// Function for getting now playing movies data
function getNowPlayingMovies() {
    return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch now playing movies");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching now playing movies:", error);
            throw error;
        });
}

// Function for getting individual movie that was clicked by the user
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

// Function for getting movie trailer
function getMovieTrailer(movie_id) {
    return fetch(`${BASE_URL}/movie/${movie_id}/videos?api_key=${API_KEY}`)
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


export { getPopularMovies, getTopRatedMovies, getUpComingMovies, getNowPlayingMovies, getMovieById, getPersonImage, getMovieTrailer };