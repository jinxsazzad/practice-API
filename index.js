const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler")

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/todos", {})
  .then(() => {
    console.log("DB is Connected");
  })
  .catch((err) => console.log(err));
// application routes
app.use("/todo",todoHandler)


// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

// default webpage
app.all("/", (req, res) => {
  res.send(`Server is Running in port 3000`);
});

// application running port
app.listen(3000, () => {
  console.log("app listening at port 3000");
});
