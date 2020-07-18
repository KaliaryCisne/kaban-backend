import { Router } from "express";
import UserController from "../app/controllers/UserController";

const UsersRouter = Router();
const userController = new UserController();


UsersRouter.post("/", userController.store);

export default UsersRouter;