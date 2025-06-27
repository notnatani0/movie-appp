import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { searchMovies, getTrendingMovies } from "../services/api";
import "../styles/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrending() {
      try {
        const trending = await getTrendingMovies();
        setMovies(trending || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch trending movies.");
      } finally {
        setLoading(false);
      }
    }

    loadTrending();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);

    try {
      const results = await searchMovies(searchQuery);
      setMovies(results || []);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="home">
      <form onSubmit={handleSearch} className="movie-search">
        <input
          type="text"
          placeholder="Search movies..."
          className="movie-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="loading">Loading movies...</p>
      ) : movies && movies.length > 0 ? (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="empty">No movies found. Try a different search.</p>
      )}
    </section>
  );
}

export default Home;
