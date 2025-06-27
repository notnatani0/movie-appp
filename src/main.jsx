import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";

import { MovieProvider } from "./contexts/movieContext";
import { ThemeProvider } from "./contexts/ThemeContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
