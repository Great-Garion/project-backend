const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require ("jsonwebtoken");
const users = require("../models/user");

const router = express.Router()

router.post("/login", async (req, res) => {
    try {
        //ambil data dari body
        const dataLogin = req.body;

        //ambil data dari db
        const user = await users.findOne({ email: dataLogin.email });
        //cek password
        if (user) {
            // console.log(user);
            const validatePassword = bcrypt.compareSync(
                dataLogin.password,
                user.password
            );

            //jika password sesuai
            if (validatePassword) {
                // console.log("password");
                //buat token berisi data user kecuali password
                const { password, ...rest } = user.toObject();
                const token = jwt.sign(rest, process.env.JWT_KEY);

                return res.json({
                    message : "login successfull",
                    token
                })
            }
        }
        res.json("email or pasword wrong")
    } catch (error) {
        res.json({ message: error.message || "internal server error" })
    }
});

router.post("/regis", async (req, res) => {
    try {
        //ambil data dari body
        const dataRegis = req.body;

        //hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(dataRegis.password, salt)
        dataRegis.password = hash;

        //simpan data ke db
        await users.create(dataRegis)
        res.json("user has been register");
    } catch (error) {
        res.json({ message: error.message || "internal server error" })
    }
})

module.exports = router