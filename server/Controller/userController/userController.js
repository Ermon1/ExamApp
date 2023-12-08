const User = require("../../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRegistration = async (req, res, next) => {
  const { userName, password, role } = req.body;
  try {
    const username=userName.toLowerCase()
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be greater than 8" });
    }
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
    console.log(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({users});
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getUser = async (req, res, next) => {
  try {
    const { userName } = req.body;
    
    const username = userName.toLowerCase()
    console.log(username)
    const user = await User.findOne({ userName:username });
console.log(user)
    if (!user) {
      return res.status(401).json({ error: "invalid UserName " });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const getUserById = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const updatedUser = await User.findOne({ _id: userId });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user: updatedUser, message: "update successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};

const updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user: updatedUser, message: "update successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};
const deleteUserByUserName = async (req, res, next) => {
  const { userName } = req.params;
  const username=userName.toLowerCase()

try {
 const deletedUser = await User.findOneAndDelete({ username });

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User deleted successfully" });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
}};
const deleteUserByUserId = async (req, res, next) => {
  const { userId } = req.params;
  

  try {
    const deletedUser = await User.findOneAndDelete({ _id:userId });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  userRegistration,
  getAllUsers,
  getUser,
  updateUser,
  deleteUserByUserName,
  getUserById,
  deleteUserByUserId,
};


