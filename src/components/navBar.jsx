import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Cinemora</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
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
