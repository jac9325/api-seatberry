import express from "express";

import { RentCtrls } from "../controllers/index.js";

const { getAllRent, createRent } = RentCtrls;

const router = express.Router();
const rentroutes = {
  CREATE: "/rent/create",
  GET_ALL: "/rents",
};

router.post(rentroutes.CREATE, createRent);
router.get(rentroutes.GET_ALL, getAllRent);

export default router;
