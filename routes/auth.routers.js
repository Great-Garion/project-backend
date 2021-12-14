const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require ("jsonwebtoken");

const users = require("../models/user");

const router = express.Router()

router.post("/login", async (req, res) => {
    try {
        const dataLogin = req.body;

        const user = await users.findOne({ email: dataLogin.email });
        if (user) {
            const validatePassword = bcrypt.compareSync(
                dataLogin.password,
                user.password
            );

            if (validatePassword) {
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
        const dataRegis = req.body;

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(dataRegis.password, salt)
        dataRegis.password = hash;

        await users.create(dataRegis)
        res.json("user has been register");
    } catch (error) {
        res.json({ message: error.message || "internal server error" })
    }
})

module.exports = router