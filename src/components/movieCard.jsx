import { Heart } from "lucide-react";
import "../styles/movieCard.css";
import { useMovieContext } from "../contexts/movieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function handleFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || "Movie Poster"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/fallback.jpg";
          }}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            aria-label={favorite ? "Remove from Favorites" : "Add to Favorites"}
            onClick={handleFavoriteClick}
          >
            <Heart size={20} />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 title={movie.title}>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
