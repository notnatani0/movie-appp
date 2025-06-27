const API_KEY = "cf0fd96d67c045703972eac7fa9c1d69";
const BASE_URL = "https://api.themoviedb.org/3";

// ✅ Get popular/trending movies
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch trending movies");
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("getTrendingMovies error:", error);
    return [];
  }
};

// ✅ Search movies by query
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) throw new Error("Failed to search movies");
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("searchMovies error:", error);
    return [];
  }
};
