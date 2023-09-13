const User = require("../models/Users");

//Add User Controller
export const addUserController = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Error adding user" });
  }
};

// User Info Controller
export const userInfoController = async (req, res) => {
  const { username, password } = req.query;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error retrieving user info:", error);
    res.status(500).json({ error: "Error retrieving user info" });
  }
};

//All User Controller
export const allUserController = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("Error retrieving all users:", error);
    res.status(500).json({ error: "Error retrieving all users" });
  }
};
