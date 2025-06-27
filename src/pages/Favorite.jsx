import "../styles/Favorites.css";
import { useMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/movieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  const hasFavorites = favorites && favorites.length > 0;

  return (
    <section className="favorites-page">
      <h2>Your Favorite Movies</h2>

      {hasFavorites ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h3>No favorites yet!</h3>
          <p>Click the ♥ icon on any movie to add it to this list.</p>
        </div>
      )}
    </section>
  );
}

export default Favorite;
