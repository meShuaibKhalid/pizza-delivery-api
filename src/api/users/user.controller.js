const customer = require("./user.model");
const jwt = require("jsonwebtoken");
const TOKEN_KEY = "pizza-app";

const createUser = async function (req, res) {
  try {
    const user = req.body;
    user.email = user.email.toLowerCase();
    const oldUser = await customer.findOne({ email: user.email });
    if (oldUser) {
      return res.status(400).json({ message: "User Already Exist. Try login" });
    }
    const newUser = await customer.create(user);
    const token = jwt.sign(
      { user_id: newUser._id, email: newUser.email, role: newUser.role },
      TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    res.status(201).json(token);
  } catch (err) {
    console.log(err);
  }
};

const login = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  return customer.findOne({ email: email }).then((response) => {
    if (!response) {
      return res.status(400).json({ message: "User Not Available" });
    }
    if (response.email == email && response.password == password) {
      const data = jwt.sign(
        {
          id: response._id,
          email: response.email,
          role: response.role,
        },
        TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ message: "Wrong Email or Password" });
    }
  });
};

const controller = { createUser, login }

module.exports = controller;
