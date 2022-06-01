import express from "express";

import { RentedCtrls } from "../controllers/index.js";

const { createRented } = RentedCtrls;
import { validateToken } from "../midlewares/index.js";
const router = express.Router();
const rentedroutes = {
  CREATE: "/rented/create",
};

router.post(rentedroutes.CREATE, validateToken, createRented);

export default router;
