import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", requireAuth, getUser);

export default userRouter;
