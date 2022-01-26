require("dotenv").config;
const express = require("express");
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = 5000;

const app = express();

// "app.use()" Adds middleware functionality to the app 

// Requires the app to parse the data to json before sending as browsers do not parse to json by default
app.use(express.json());

const router = require("../src/routes/router");
app.use("/", router);

// run API using command "node ."
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
