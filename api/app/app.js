import express from "express";
import {
  CarRouter,
  UserRouter,
  RentRouter,
  RentedRouter,
} from "../routes/index.js";
import cors from "cors";
/**
 * Express
 */
const app = express();

//Midleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (request, response) => {
  response.send("Hola!!! API SEAT BERRY");
});

app.use("/seatberry", CarRouter);
app.use("/seatberry", UserRouter);
app.use("/seatberry", RentRouter);
app.use("/seatberry", RentedRouter);

export default app;
