import express from "express";
import { CarRouter } from "../routes/index.js";
/**
 * Express
 */
const app = express();

//Midleware
app.use(express.json());

//Routes
app.get("/", (request, response) => {
  response.send("Hola!!! API SEAT BERRY");
});

app.use("/api", CarRouter);

export default app;
