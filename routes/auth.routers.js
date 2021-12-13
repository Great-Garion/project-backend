const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    //   Ambil data dari body
    const dataLogin = req.body;

    // Cari user berdasarkan email
    const user = await User.findOne({ email: dataLogin.email });

    // jika user di temukan
    if (user) {
      // cek passwordnya
      const validatePassword = bcrypt.compareSync(
        dataLogin.password,
        user.password
      );

      //   jika password sesuai
      if (validatePassword) {
        // buat token berisikan data user kecuali password
        const { password, ...rest } = user.toObject();
        const token = jwt.sign(rest, process.env.JWT_KEY);

        return res.json({ 
          message: "login successufully", 
          token 
        });
      }
    }

    // email atau password salah
    res.json("email or password invalid");
  } catch (error) {
    res.json({ message: error.message || "internal server error" });
  }
});

router.post("/regis", async (req, res) => {
  try {
    // ambil data dari body
    const dataRegis = req.body;

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(dataRegis.password, salt);
    dataRegis.password = hash;

    // simpan data ke db
    await User.create(dataRegis);
    res.json("user has been registered");
  } catch (error) {
    res.json({ message: error.message || "internal server error" });
  }
});

module.exports = router;