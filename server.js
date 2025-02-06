const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const dataRoutes = require("./routes/dataRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("", dataRoutes);

const PORT = process.env.PORT;
const DB = process.env.DB;

const server = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Db conneted...");
    app.listen(PORT, () => {
      console.log("Server is running... ", PORT);
    });
  } catch (error) {
    console.log("Error has occured while starting server: ", error);
  }
};

server();
