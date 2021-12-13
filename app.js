const express = require("express");
const app = express();

const routes = require("./routes")
const PORT = process.env.PORT || 3000;

const db = require("./config/connect")

app.use(express.json());
app.use(routes)

db.connection.on("error", (err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("garion Mall From Express Running on PORT " + PORT);
});
