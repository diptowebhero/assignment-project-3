// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  addUserController,
  userInfoController,
  allUserController,
} = require("./controllers/userController");

// Create an Express app
const app = express();
const port = process.env.PORT || 5000;

// Database connection URL
const uri =
  "mongodb+srv://vgarrepally:dR7NPdix6fq6bDC3@se-assignment.mec6y3j.mongodb.net/se-assignments?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(cors());

// CRUD Operations

// Create (POST): Add a new user
app.post("/add-user", addUserController);

// Read (GET): Retrieve user information by username and password
app.get("/user-info", userInfoController);

// Read (GET): Retrieve all users
app.get("/all-users", allUserController);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);

  // mongoose server connection
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error", err);
    });
});
