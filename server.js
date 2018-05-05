const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

authRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is on Port ${PORT}`);
});
