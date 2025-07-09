import "./styles/App.css";
import NavBar from "./components/navBar";
import Watchlist from "./pages/Watchlist";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Footer from "./components/footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./contexts/UserContext";

function App() {
  const { isAuthenticated, loading } = useUser();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Home /> : <Navigate to="/auth" replace />} 
          />
          <Route 
            path="/watchlist" 
            element={isAuthenticated ? <Watchlist /> : <Navigate to="/auth" replace />} 
          />
          <Route 
            path="/auth" 
            element={!isAuthenticated ? <Auth /> : <Navigate to="/" replace />} 
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
