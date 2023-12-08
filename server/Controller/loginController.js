
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const loginController =  async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ error: "invalid UserName " });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid userName or password" });
    }
    const token = jwt.sign(user._id, user.password, { expiresIn: "10d" });
    res.status(200).json(token);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};




module.exports = { loginController };