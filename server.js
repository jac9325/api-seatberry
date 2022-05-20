import express from "express";
import mongoose from "mongoose";
import app from "./api/app/app.js";

import "dotenv/config";
/**
 * Mongoose
 */

//connect db
await mongoose.connect(process.env.MONGODB_URI);

//Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("Connection error", e);
});

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(PORT, () => {
  console.log("Initialize server!!");
});
