# WatchVault v2 - Movie Watchlist App

> **Version 2.0** - Complete rewrite with user authentication and advanced watchlist management

*Previously known as Cinemora - now evolved into a comprehensive movie tracking platform*

A modern, minimal React-based movie watchlist application that helps you track your movie journey. Built with React 19, Vite, and the TMDB API.

## ✨ Features

### 🎬 Movie Discovery
- Search movies by title with real-time results
- Browse trending/popular movies
- High-quality movie posters and details
- Responsive grid layout

### 📚 Personal Watchlist Management
- **Want to Watch** - Movies you plan to watch
- **Currently Watching** - Movies you're actively watching
- **Watched** - Movies you've completed
- Personal statistics and progress tracking

### 🔐 User Authentication
- Secure sign up and sign in
- Persistent user sessions
- User-specific watchlist data
- Protected routes

### 🎨 Modern Design
- Clean, minimal interface
- Dark/Light theme support
- Smooth animations and transitions
- Mobile-responsive design
- Glassmorphism effects

## 🚀 Live Demo

[View Live App](https://your-vercel-url.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 6
- **Routing**: React Router DOM
- **Styling**: CSS3 with Custom Properties
- **Icons**: Lucide React
- **API**: TMDB (The Movie Database)
- **Storage**: localStorage for user data
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/notnatani0/movie-appp.git
   cd movie-appp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   Add your TMDB API key to the `.env` file:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔑 Getting TMDB API Key

1. Visit [TMDB](https://www.themoviedb.org/)
2. Create an account
3. Go to Settings > API
4. Generate your API key
5. Add it to your `.env` file

## 🎯 Usage

### Getting Started
1. Open the app and sign up with your email
2. Start searching for movies
3. Add movies to your watchlist categories
4. Track your movie-watching progress

### Watchlist Management
- **Add movies**: Click the "+" button on any movie card
- **Change status**: Use the dropdown to move movies between lists
- **Remove movies**: Select "Remove" from the dropdown menu
- **View statistics**: Check your progress on the watchlist page

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── movieCard.jsx   # Movie card with watchlist controls
│   ├── navBar.jsx      # Navigation with auth controls
│   └── footer.jsx      # Footer component
├── contexts/           # React context providers
│   ├── UserContext.jsx      # User authentication
│   ├── WatchlistContext.jsx # Watchlist management
│   ├── movieContext.jsx     # Movie favorites (legacy)
│   └── ThemeContext.jsx     # Theme management
├── pages/              # Route components
│   ├── Auth.jsx        # Sign in/Sign up
│   ├── Home.jsx        # Movie discovery
│   └── Watchlist.jsx   # Personal watchlist
├── services/           # API services
│   └── api.js          # TMDB API functions
└── styles/             # CSS modules
    ├── index.css       # Global styles & themes
    ├── Auth.css        # Authentication styles
    ├── movieCard.css   # Movie card styles
    └── ...
```

## 🔧 Features in Detail

### Authentication System
- User registration and login
- Session management with localStorage
- Protected routes for authenticated users
- Secure user data storage

### Watchlist System
- Three categories: Want to Watch, Watching, Watched
- Real-time status updates
- Progress statistics
- User-specific data persistence

### Movie Search
- Debounced search for performance
- Real-time search results
- Trending movies on homepage
- Movie details and posters

### Theme System
- Dark/Light mode toggle
- Persistent theme preference
- Smooth theme transitions
- System preference detection

## 📱 Mobile Support

WatchVault is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie data API
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React](https://react.dev/) for the amazing framework

---

**WatchVault v2** - Track your movie journey! 🎬✨
=======
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
>>>>>>> 6937b85b1a3ea91bb7831eb43c91c00eeeeebd87
