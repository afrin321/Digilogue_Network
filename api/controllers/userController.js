const { User } = require("./../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "fskfbsbkdrbgkrbgkdtgthlkthlthltrl";

const test = (req, res) => {
  console.log("ok");
  res.send("test");
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    //console.log(username, password);
    const newUser = new User({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    //console.log(newUser);
    const addUser = await newUser.save();
    res.json(addUser);
  } catch (e) {
    console.log(e);
  }
};

const login = async (req, res) => {
  console.log("login attempt");
  try {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });

    const authenticated = bcrypt.compareSync(password, userDoc.password);

    console.log(authenticated);
    if (authenticated) {
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        console.log("tokenn", token);

        res.cookie("token", token).json({
          id: userDoc._id,
          username: userDoc.username,
        });
      });
    } else {
      res.status(400).json("Wrong credentials");
      console.log("Wrong credentials");
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

const logout = (req, res) => {
  res.cookie("token", "").json("ok");
};

const profile = (req, res) => {
  const { token } = req.cookies;
  console.log("token", token);
  if (token) {
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;

      res.json(info);
    });
  }
};

module.exports = {
  test,
  register,
  login,
  logout,
  profile,
};
