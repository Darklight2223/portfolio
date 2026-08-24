// const express = require("express");
// const app = express();

// require("dotenv").config();

// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const userRoute = require("./routes/User");

// const PORT = process.env.PORT || 4000;
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

// app.use("/api/v1/mail", userRoute);

// app.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: "Your Server is Running",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`App is listening at ${PORT}`);
// });

const express = require("express");
const app = express();

require("dotenv").config();

const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoute = require("./routes/User");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1/mail", userRoute);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your Server is Running",
  });
});

module.exports = app;