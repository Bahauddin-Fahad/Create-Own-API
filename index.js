const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/v1/user.route");

// Middleware
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Running Own API Server");
});

app.all("*", (req, res) => {
  res.send("No Route Found");
});

app.listen(port, () => {
  console.log("Listening to the Own API port");
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
