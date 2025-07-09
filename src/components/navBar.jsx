import { Link } from "react-router-dom";
import "../styles/navBar.css";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { Sun, Moon, User, LogOut } from "lucide-react";

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, signOut } = useUser();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">WatchVault</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/watchlist" className="nav-link">
              My Watchlist
            </Link>
            <div className="user-menu">
              <span className="user-greeting">Hi, {user?.username}!</span>
              <button onClick={handleSignOut} className="nav-link sign-out-btn">
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <Link to="/auth" className="nav-link auth-link">
            <User size={16} />
            Sign In
          </Link>
        )}
        
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
