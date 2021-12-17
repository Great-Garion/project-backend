const express = require("express");
const cors = require("cors");

const app = express();

const router = require("./routes")
const PORT = process.env.PORT || 3000;

const db = require("./config/connect")

app.use(cors())
app.use(express.json());
app.use(router)

db.connection.on("error", (err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("garion Mall From Express Running on PORT " + PORT);
});
