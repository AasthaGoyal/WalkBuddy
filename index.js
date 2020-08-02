const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get("/find", (req, res) => res.sendFile(__dirname + "/public/find.html"));
app.get("/endScreen", (req, res) => res.sendFile(__dirname + "/public/endScreen.html"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
