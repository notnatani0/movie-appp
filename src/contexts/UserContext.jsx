import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const signUp = (userData) => {
    const { username, email, password } = userData;
    
    // Get existing users or create empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
      throw new Error("User already exists with this email or username");
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password, // In a real app, this would be hashed
      createdAt: new Date().toISOString(),
      watchlist: {
        wantToWatch: [],
        watching: [],
        watched: []
      }
    };
    
    // Save user to users array
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Set as current user
    const userSession = { ...newUser };
    delete userSession.password; // Don't store password in session
    
    setUser(userSession);
    setIsAuthenticated(true);
    localStorage.setItem("currentUser", JSON.stringify(userSession));
    
    return userSession;
  };

  const signIn = (credentials) => {
    const { email, password } = credentials;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    
    // Set as current user
    const userSession = { ...user };
    delete userSession.password; // Don't store password in session
    
    setUser(userSession);
    setIsAuthenticated(true);
    localStorage.setItem("currentUser", JSON.stringify(userSession));
    
    return userSession;
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
  };

  const updateUserWatchlist = (watchlistData) => {
    if (!user) return;
    
    // Update users array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex !== -1) {
      users[userIndex].watchlist = watchlistData;
      localStorage.setItem("users", JSON.stringify(users));
      
      // Update current user session
      const updatedUser = { ...user, watchlist: watchlistData };
      setUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    signUp,
    signIn,
    signOut,
    updateUserWatchlist
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser };
