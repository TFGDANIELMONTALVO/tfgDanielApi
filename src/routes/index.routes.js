import { Router } from "express";
import { health } from "../api/health/controllers/health.controllers.js";
import { userCreate } from "../api/users/controllers/userCreate.controller.js";
import { userList } from "../api/users/controllers/userList.controller.js";

const router = Router();

router.get("/", health);
router.post("/users", userCreate);
router.get("/users", userList);

export default router;