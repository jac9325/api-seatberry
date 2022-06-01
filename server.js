import express from "express";
import mongoose from "mongoose";
import app from "./api/app/app.js";

import "dotenv/config";
/**
 * Mongoose
 */

//connect db
await mongoose.connect(
  "mongodb://jaime:123@cluster0-shard-00-00.gab6y.mongodb.net:27017,cluster0-shard-00-01.gab6y.mongodb.net:27017,cluster0-shard-00-02.gab6y.mongodb.net:27017/seartberry_db?ssl=true&replicaSet=atlas-far0x9-shard-0&authSource=admin&retryWrites=true&w=majority"
);

//Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("Connection error", e);
});

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(5000, () => {
  console.log("Initialize server!!");
});
