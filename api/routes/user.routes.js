import express from "express";

import { UserCtrls } from "../controllers/index.js";

const { login, createUser, getAllUsers } = UserCtrls;

const router = express.Router();
const userroutes = {
  LOGIN: "/login",
  CREATE: "/users/create",
  GET_ALL: "/users",
};

router.post(userroutes.LOGIN, login);
router.post(userroutes.CREATE, createUser);
router.get(userroutes.GET_ALL, getAllUsers);

export default router;
