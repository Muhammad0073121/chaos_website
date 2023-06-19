require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
app.use(cors());
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.json());

const Userprofile = require("./models/UserProfilesSchema");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://chaos:xhU0NKDe0x5KUNwS@cluster0.vnbwkzl.mongodb.net/website?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB Connection Successful");
});

function authenticateToken(req, res, nex) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
}

///////////////////////////////////////APIs//////////////////////////////////////////////////////////////////

//////////////////////////////////////GET////////////////////////////////////////////////////////////////////
app.get("/", (req, res) => {
  console.log("Route working");
});

app.get("/login/:username", (req, res) => {
  Userprofile.find({ Username: req.params.username }).then((profile) => {
    res.send(profile);
    console.log(profile);
  });
});

//////////////////////////////////////////POST//////////////////////////////////////////////////////////////

app.post("/api/login/", (req, res) => {
  //Authentication

  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);

  res.json({ accessToken: accessToken });
});

app.post("/api/addUserprofile/", (req, res) => {
  const profile = new UserProfiles({
    Username: req.body.username,
    Email: req.body.email,
    FullName: req.body.fullname,
    Password: req.body.password,
  });

  profile
    .save()
    .then(() => res.send(profile))
    .catch((err) => console.log(err));
});

//////////////////////////////////////Server listening PORT////////////////////////////////////////////////////
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
