const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Erster Versuch Express zu benutzen");
});

app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
