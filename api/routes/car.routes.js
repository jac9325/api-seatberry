import { CarCtrls } from "../controllers/index.js";
import express from "express";

const { getAllCarsByUser } = CarCtrls;

const router = express.Router();

const carRoutes = {
  GET_ALL: "/cars/:id",
};

router.get(carRoutes.GET_ALL, getAllCarsByUser);

export default router;
