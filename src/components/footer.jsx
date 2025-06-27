import { Github, ExternalLink } from "lucide-react";
import tmdbLogo from "../assets/tmbdlogo.svg";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <span>This website uses</span>
        <img src={tmdbLogo} alt="TMDB Logo" className="footer-logo" />
        <span>
          and the TMDB APIs for project-based learning purposes only. This
          application is not endorsed, certified, or otherwise approved by TMDB.
        </span>
      </div>

      <div className="footer-meta">
        <p>© {new Date().getFullYear()} Cinemora. All rights reserved.</p>
        <div className="footer-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TMDB"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
