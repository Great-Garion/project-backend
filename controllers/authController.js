const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

module.exports = {
  addRegis: async (req, res) => {
    try {
      const dataRegis = req.body;

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(dataRegis.password, salt);
      dataRegis.password = hash;

      await User.create(dataRegis);
      res.json("user has been register");
    } catch (error) {
      res.json({ message: error.message || "internal server error" });
    }
  },

  addLogin: async (req, res) => {
    try {
      const dataLogin = req.body;

      const user = await User.findOne({ email: dataLogin.email });
      if (user) {
        const validatePassword = bcrypt.compareSync(
          dataLogin.password,
          user.password
        );

        if (validatePassword) {
          const { password, ...rest } = user.toObject();
          const token = jwt.sign(rest, process.env.JWT_KEY);

          return res.json({
            message: "login successfull",
            token,
          });
        }
      }
      res.json("email or pasword wrong");
    } catch (error) {
      res.json({ message: error.message || "internal server error" });
    }
  },

  
};
