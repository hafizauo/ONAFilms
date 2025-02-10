import "./Movies.css"
import MovieCard from "./MovieCards";

function Movies({ title, movies }) {
    return (
        <div className="movies">
            <h2>{title}</h2>
            <div className="movie-card-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;