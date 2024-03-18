const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const request = require("request");

// Define your routes and middleware
const LearnerRouter=require("./routes/LearnerRoute");

// Define your routes and middleware
const usersRouter = require("./routes/users");


require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.set("strictQuery", false);
const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
})

app.use("/api/users", usersRouter);
app.use("/Learners",LearnerRouter)

app.use(express.static("public"));


app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

;

