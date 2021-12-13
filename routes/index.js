const express = require("express")
const router = express.Router()
const validateToken = require("../middleware/middleware")


const authRouter = require("./auth.routers")
const userRouter = require("./user.router")


router.get("/", (req, res) => {
    res.json("belajar auth dari express")
})

router.use("/auth", authRouter)

router.use(validateToken)
router.use("/user", userRouter)





module.exports = router