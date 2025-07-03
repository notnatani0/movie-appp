# Cinemora - Movie Application

Cinemora is a React-based movie application designed to showcase trending movies and allow users to manage their favorites. It is built with Vite for a fast and optimized development experience. The app uses The Movie Database (TMDB) API for fetching movie data.

## Features

- **Trending Movies**: Browse popular and trending movies fetched from the TMDB API.
- **Search Functionality**: Search for movies by title or keyword.
- **Favorites Management**: Add movies to your favorites list and access them easily.
- **Dark/Light Theme**: Toggle between dark and light themes for a better user experience.
- **Responsive Design**: Fully responsive and works seamlessly across devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Frontend tooling for a faster and leaner development experience.
- **TMDB API**: Source of movie data.
- **React Router**: For managing navigation and routing.
- **CSS Modules**: For styling components with scoped styles.
- **Local Storage**: To persist user preferences and favorites.

## Screenshots

![Home Page](path/to/screenshot1.png)
![Favorites Page](path/to/screenshot2.png)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (version 16.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/notnatani0/movie-appp.git
   cd movie-appp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

### Build for Production

To build the project for production, run:
```bash
npm run build
```
The output will be in the `dist` directory.

### Linting and Formatting

To lint and format your code, run:
```bash
npm run lint
```

## Folder Structure

```
src/
├── components/      # Reusable UI components
├── contexts/        # Context API for state management
├── pages/           # Application pages (Home, Favorites)
├── services/        # API service functions
├── styles/          # CSS styles
├── App.jsx          # Main application component
├── main.jsx         # Entry point
```

## API Integration

The application uses the TMDB API to fetch movie data. Key functions:

- `getTrendingMovies`: Fetches popular movies.
- `searchMovies`: Searches for movies based on a query.

All API functions are defined in `src/services/api.js`.

## Disclaimer

This project uses TMDB APIs for educational purposes only and is not endorsed or certified by TMDB.

## License

This project is licensed under the MIT License.

## Credits

- **TMDB API**: [The Movie Database](https://www.themoviedb.org/)
- **Icons**: [Lucide Icons](https://lucide.dev/)

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss the changes.

## Contact

For any inquiries or questions, you can reach out via [your email or GitHub profile link].
