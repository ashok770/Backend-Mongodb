const User = require("../models/User");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findOne({ id: req.params.id });
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = new User({
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
      });

      await newUser.save();
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updateData = {};
      if (req.query.name) updateData.name = req.query.name;
      if (req.query.email) updateData.email = req.query.email;
      if (req.query.password) updateData.password = req.query.password;

      const updatedUser = await User.findOneAndUpdate(
        { id: req.params.id },
        updateData,
        { new: true }
      );
      
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findOneAndDelete({ id: req.params.id });
      
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = userController;