import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "./UserContext";

const WatchlistContext = createContext();

const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
  const { user, updateUserWatchlist } = useUser();
  const [watchlist, setWatchlist] = useState({
    wantToWatch: [],
    watching: [],
    watched: []
  });

  useEffect(() => {
    if (user && user.watchlist) {
      setWatchlist(user.watchlist);
    }
  }, [user]);

  const addToWantToWatch = (movie) => {
    if (!user) return;
    
    const newWatchlist = {
      ...watchlist,
      wantToWatch: [...watchlist.wantToWatch.filter(m => m.id !== movie.id), movie]
    };
    
    setWatchlist(newWatchlist);
    updateUserWatchlist(newWatchlist);
  };

  const addToWatching = (movie) => {
    if (!user) return;
    
    const newWatchlist = {
      ...watchlist,
      watching: [...watchlist.watching.filter(m => m.id !== movie.id), movie],
      wantToWatch: watchlist.wantToWatch.filter(m => m.id !== movie.id)
    };
    
    setWatchlist(newWatchlist);
    updateUserWatchlist(newWatchlist);
  };

  const addToWatched = (movie, rating = null, notes = "") => {
    if (!user) return;
    
    const watchedMovie = {
      ...movie,
      watchedAt: new Date().toISOString(),
      rating,
      notes
    };
    
    const newWatchlist = {
      ...watchlist,
      watched: [...watchlist.watched.filter(m => m.id !== movie.id), watchedMovie],
      watching: watchlist.watching.filter(m => m.id !== movie.id),
      wantToWatch: watchlist.wantToWatch.filter(m => m.id !== movie.id)
    };
    
    setWatchlist(newWatchlist);
    updateUserWatchlist(newWatchlist);
  };

  const removeFromWatchlist = (movieId, listType) => {
    if (!user) return;
    
    const newWatchlist = {
      ...watchlist,
      [listType]: watchlist[listType].filter(m => m.id !== movieId)
    };
    
    setWatchlist(newWatchlist);
    updateUserWatchlist(newWatchlist);
  };

  const getMovieStatus = (movieId) => {
    if (watchlist.watched.find(m => m.id === movieId)) return "watched";
    if (watchlist.watching.find(m => m.id === movieId)) return "watching";
    if (watchlist.wantToWatch.find(m => m.id === movieId)) return "wantToWatch";
    return null;
  };

  const updateWatchedMovie = (movieId, rating, notes) => {
    if (!user) return;
    
    const newWatchlist = {
      ...watchlist,
      watched: watchlist.watched.map(movie => 
        movie.id === movieId 
          ? { ...movie, rating, notes, updatedAt: new Date().toISOString() }
          : movie
      )
    };
    
    setWatchlist(newWatchlist);
    updateUserWatchlist(newWatchlist);
  };

  const getWatchlistStats = () => {
    return {
      wantToWatch: watchlist.wantToWatch.length,
      watching: watchlist.watching.length,
      watched: watchlist.watched.length,
      total: watchlist.wantToWatch.length + watchlist.watching.length + watchlist.watched.length
    };
  };

  const value = {
    watchlist,
    addToWantToWatch,
    addToWatching,
    addToWatched,
    removeFromWatchlist,
    getMovieStatus,
    updateWatchedMovie,
    getWatchlistStats
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};

export { useWatchlist };
