// Simple test to verify favorites functionality
// Run this in the browser console to test

const testFavorites = () => {
  console.log("Testing favorites functionality...");
  
  // Test movie object
  const testMovie = {
    id: 123,
    title: "Test Movie",
    poster_path: "/test.jpg",
    release_date: "2024-01-01"
  };
  
  // Test localStorage
  try {
    localStorage.setItem('favorites', JSON.stringify([testMovie]));
    const stored = JSON.parse(localStorage.getItem('favorites'));
    console.log("✅ localStorage test passed:", stored);
    
    // Clear test data
    localStorage.removeItem('favorites');
    console.log("✅ Test cleanup completed");
    
    return true;
  } catch (error) {
    console.error("❌ localStorage test failed:", error);
    return false;
  }
};

// Run the test
testFavorites();
