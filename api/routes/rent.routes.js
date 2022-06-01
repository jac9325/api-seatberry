import express from "express";

import { RentCtrls } from "../controllers/index.js";

const {
  getAllRents2,
  createRent,
  getRentbyId,
  updateRent,
  deleteRent,
  cancelRent,
} = RentCtrls;
import { validateToken } from "../midlewares/index.js";
const router = express.Router();
const rentroutes = {
  CREATE: "/rent/create",
  GET_ALL: "/rents",
  GET_ONE: "/rent/:id",
  UPDATE: "/rent/update/:id",
  DELETE: "/rent/delete/:id",
  CANCEL: "/rent/cancel/:id",
};

router.post(rentroutes.CREATE, validateToken, createRent);
router.get(rentroutes.GET_ALL, getAllRents2);
router.get(rentroutes.GET_ONE, getRentbyId);
router.put(rentroutes.UPDATE, updateRent);
router.delete(rentroutes.DELETE, deleteRent);
router.put(rentroutes.CANCEL, cancelRent);

export default router;
