import { useState } from "react";
import { useWatchlist } from "../contexts/WatchlistContext";
import { useUser } from "../contexts/UserContext";
import MovieCard from "../components/movieCard";
import { Clock, Eye, CheckCircle } from "lucide-react";
import "../styles/Watchlist.css";

function Watchlist() {
  const { watchlist, getWatchlistStats } = useWatchlist();
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("wantToWatch");
  
  const stats = getWatchlistStats();
  
  const tabs = [
    {
      id: "wantToWatch",
      label: "Want to Watch",
      icon: Clock,
      count: stats.wantToWatch,
      movies: watchlist.wantToWatch
    },
    {
      id: "watching",
      label: "Currently Watching",
      icon: Eye,
      count: stats.watching,
      movies: watchlist.watching
    },
    {
      id: "watched",
      label: "Watched",
      icon: CheckCircle,
      count: stats.watched,
      movies: watchlist.watched
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  if (!user) {
    return (
      <div className="watchlist-page">
        <div className="auth-required">
          <h2>Sign in to access your watchlist</h2>
          <p>Create an account or sign in to start tracking your movies.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="watchlist-page">
      <div className="watchlist-header">
        <h1>My Watchlist</h1>
        <div className="watchlist-stats">
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total Movies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.watched}</span>
            <span className="stat-label">Watched</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.watching}</span>
            <span className="stat-label">Watching</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.wantToWatch}</span>
            <span className="stat-label">Want to Watch</span>
          </div>
        </div>
      </div>

      <div className="watchlist-tabs">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
              <span className="tab-count">{tab.count}</span>
            </button>
          );
        })}
      </div>

      <div className="watchlist-content">
        {activeTabData.movies.length > 0 ? (
          <div className="movies-grid">
            {activeTabData.movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <activeTabData.icon size={48} className="empty-icon" />
            <h3>No movies in {activeTabData.label.toLowerCase()}</h3>
            <p>
              {activeTab === "wantToWatch" && "Movies you want to watch will appear here."}
              {activeTab === "watching" && "Movies you're currently watching will appear here."}
              {activeTab === "watched" && "Movies you've finished watching will appear here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
