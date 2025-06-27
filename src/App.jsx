import "./styles/App.css";
import NavBar from "./components/navBar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
