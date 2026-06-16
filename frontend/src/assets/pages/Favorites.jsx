import "../../css/Favorites.css";
import { useMovieContext } from "../../context/MovieContext.jsx";
import MovieCard from "../../components/MovieCard.jsx";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>My Favorite Movies</h2>
                <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                </div>
            </div>
        );
    }
    

    return (
        <div className="favorites">
            <h2>My Favorite Movies</h2>
            <div className="movie-list">
                {favorites.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
  