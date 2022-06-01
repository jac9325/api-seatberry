import { CarCtrls } from "../controllers/index.js";
import express from "express";
import { validateToken } from "../midlewares/index.js";

const { getAllCarsByUser, createCar, updateCar, findCar, deleteCar } = CarCtrls;

const router = express.Router();

const carRoutes = {
  GET_ALL: "/cars",
  CREATE: "/cars/create",
  UPDATE: "/cars/update/:id",
  DELETE: "/cars/delete/:id",
};

router.get(carRoutes.GET_ALL, getAllCarsByUser);
router.post(carRoutes.CREATE, validateToken, createCar);
router.put(carRoutes.UPDATE, validateToken, updateCar);
router.delete(carRoutes.DELETE, deleteCar);

export default router;
