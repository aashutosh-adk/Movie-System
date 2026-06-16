import MovieCard from "../../components/MovieCard";
import { useState,useEffect } from "react";
import {searchMovies, getPopularMovies} from "../../services/api.js";

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            }catch(error){
                console.error("Error fetching movies:", error);
            }
            finally{
            setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault()
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const searchResults = await searchMovies(searchQuery);
                setMovies(searchResults);
                setError(null);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setError("Failed to fetch search results.");
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    };

    return(
        <>
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search movies..."
             className="search-input" 
             onChange={(e) => setSearchQuery(e.target.value)}
             />
            <button type="submit" className="search-button">Search</button> 
        </form>
        <div className="home">
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
        </>
       
    )
}
export default Home;