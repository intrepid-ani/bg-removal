import app from "./app.js";
import connectDB from "./config/connectDB.config.js";

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      "MONGODB connection FAILED (Connection Error in ./index.js)",
      error.message
    );
    process.exit(1);
  });
