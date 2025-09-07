# 🎬 MyMovieList

A modern movie discovery app that helps you find movies you'll enjoy without all the noise. Built with React and powered by The Movie Database (TMDB) API, featuring real-time search, trending movies, and search analytics.

## ✨ Technologies

- `React 19`
- `Vite`
- `Tailwind CSS`
- `Appwrite` (Backend & Database)
- `The Movie Database (TMDB) API`
- `React Use` (Custom hooks)

## 🚀 Features

- **Real-time Search**: Debounced search with instant results as you type
- **Trending Movies**: Displays top 5 most searched movies from your database
- **Movie Discovery**: Browse popular movies when no search is active
- **Search Analytics**: Tracks search terms and counts using Appwrite database
- **Responsive Design**: Beautiful UI that works on all screen sizes
- **Movie Details**: Shows ratings, language, release year, and posters
- **Error Handling**: Graceful error states and loading indicators

## 📍 The Process

The movie discovery app, built with React and Vite, aims to enhance user experience beyond basic search by learning user behavior and displaying trending searches. It utilizes the TMDB API for movie data and Appwrite for backend analytics. Key features include debounced search for improved performance and a dedicated trending section showcasing popular searches. The user interface is designed to be clean and distraction-free, prioritizing the movie discovery process.

- NOTE: I built this project as a practice project to get a better understanding of ReactJS concepts, and I'll add features like a favorite button and setting the category to something like watching, going to watch, or watched.

## 🚦 Running the Project

1. Clone the repository

   ```bash
   git clone https://github.com/notnatani0/movie-appp.git
   cd Movie-appp
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. Run development server

   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser

## 🔧 Setup Instructions

### TMDB API Setup

1. Visit [TMDB](https://www.themoviedb.org/settings/api)
2. Create an account and request an API key
3. Add the API key to your `.env` file

### Appwrite Setup

1. Create an [Appwrite](https://cloud.appwrite.io) account
2. Create a new project
3. Create a database and collection with these attributes:
   - `searchTerm` (String)
   - `count` (Integer)
   - `movie_id` (Integer)
   - `poster_url` (String)
4. Add your localhost domain in Project Settings → Platforms
5. Set collection permissions to allow read/write for your users
6. Add the project details to your `.env` file

## 📱 Preview

The app features:

- Hero section with search functionality
- Trending movies carousel
- Grid layout of movie cards with ratings and details
- Smooth loading states and error handling
- Responsive design for all devices

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Appwrite** - Backend-as-a-Service
- **React Use** - Collection of useful React hooks
- **Lucide React** - Beautiful icons

## 🎯 Key Features Explained

- **Debounced Search**: Uses `react-use` debounce to prevent excessive API calls
- **Search Analytics**: Every search is tracked in Appwrite database
- **Trending Algorithm**: Shows movies based on search frequency
- **Fallback Images**: Graceful handling of missing movie posters
- **Performance Optimized**: Efficient API calls and state management

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
