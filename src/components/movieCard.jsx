import { Heart, Clock, Eye, CheckCircle, Plus } from "lucide-react";
import "../styles/movieCard.css";
import { useMovieContext } from "../contexts/movieContext";
import { useWatchlist } from "../contexts/WatchlistContext";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const { getMovieStatus, addToWantToWatch, addToWatching, addToWatched, removeFromWatchlist } = useWatchlist();
  const { user } = useUser();
  const [showWatchlistMenu, setShowWatchlistMenu] = useState(false);
  
  const favorite = isFavorite(movie.id);
  const watchStatus = getMovieStatus(movie.id);

  function handleFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function handleWatchlistClick(e) {
    e.preventDefault();
    if (!user) return;
    setShowWatchlistMenu(!showWatchlistMenu);
  }

  function handleWatchlistAction(action) {
    if (!user) return;
    
    switch (action) {
      case 'wantToWatch':
        addToWantToWatch(movie);
        break;
      case 'watching':
        addToWatching(movie);
        break;
      case 'watched':
        addToWatched(movie);
        break;
      case 'remove':
        removeFromWatchlist(movie.id, watchStatus);
        break;
    }
    setShowWatchlistMenu(false);
  }

  function getWatchlistIcon() {
    switch (watchStatus) {
      case 'wantToWatch':
        return <Clock size={20} />;
      case 'watching':
        return <Eye size={20} />;
      case 'watched':
        return <CheckCircle size={20} />;
      default:
        return <Plus size={20} />;
    }
  }

  function getWatchlistButtonClass() {
    const baseClass = 'watchlist-btn';
    if (watchStatus) {
      return `${baseClass} ${baseClass}-${watchStatus}`;
    }
    return baseClass;
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : "/fallback.jpg"
          }
          alt={movie.title || "Movie Poster"}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/fallback.jpg";
          }}
        />
        <div className="movie-overlay">
          {user && (
            <>
              <div className="watchlist-menu-container">
                <button
                  className={getWatchlistButtonClass()}
                  aria-label="Manage Watchlist"
                  onClick={handleWatchlistClick}
                >
                  {getWatchlistIcon()}
                </button>
                {showWatchlistMenu && (
                  <div className="watchlist-menu">
                    <button onClick={() => handleWatchlistAction('wantToWatch')}>Want to Watch</button>
                    <button onClick={() => handleWatchlistAction('watching')}>Watching</button>
                    <button onClick={() => handleWatchlistAction('watched')}>Watched</button>
                    {watchStatus && <button onClick={() => handleWatchlistAction('remove')}>Remove</button>}
                  </div>
                )}
              </div>
              <button
                className={`favorite-btn ${favorite ? "active" : ""}`}
                aria-label={favorite ? "Remove from Favorites" : "Add to Favorites"}
                onClick={handleFavoriteClick}
              >
                <Heart size={20} fill={favorite ? "currentColor" : "none"} />
              </button>
            </>
          )}
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
