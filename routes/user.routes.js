import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";
import { checkId } from "../middlewares/checkId.js";
import { checkBody } from "../middlewares/checkBody.js";

const router = Router()

router.get("/users",getAllUsers)
router.get("/users/:id",checkId,getUser)
router.post("/users",checkBody,createUser)
router.patch("/users/:id",checkId,checkBody,updateUser)
router.delete("/users/:id",checkId,deleteUser)

export default router