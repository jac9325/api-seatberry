import express from "express";
import { CarRouter, UserRouter, RentRouter } from "../routes/index.js";
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

app.use("/seatberry", CarRouter);
app.use("/seatberry", UserRouter);
app.use("/seatberry", RentRouter);

export default app;
