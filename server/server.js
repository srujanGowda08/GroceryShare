// server/server.js
const express = require("express");
const connectDB = require("./src/config/database");
const { PORT } = require("./src/config/environment");
const authRoutes = require("./src/routes/auth.routes");
const listRoutes = require("./src/routes/list.routes");
const recipeRoutes = require("./src/routes/recipe.routes");

const app = express();

app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
