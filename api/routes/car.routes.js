import { CarCtrls } from "../controllers/index.js";
import express from "express";

const { getAllCarsByUser, createCar } = CarCtrls;

const router = express.Router();

const carRoutes = {
  GET_ALL: "/cars/:id",
  CREATE: "/cars/create",
};

router.get(carRoutes.GET_ALL, getAllCarsByUser);
router.post(carRoutes.CREATE, createCar);

export default router;
