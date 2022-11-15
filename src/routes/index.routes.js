import { Router } from "express";
import { health } from "../api/health/controllers/health.controllers.js";
import { userCreate } from "../api/users/controllers/userCreate.controller.js";
import { userList } from "../api/users/controllers/userList.controller.js";
import { groupCreate } from "../api/groups/controllers/groupCreate.controller.js";
import { groupList } from "../api/groups/controllers/groupList.controller.js";
import { userDelete } from "../api/users/controllers/userDelete.controller.js";
import { userUpdate } from "../api/users/controllers/userUpdate.controller.js";

const router = Router();

router.get("/", health);
router.get("/users", userList);
router.post("/users", userCreate);
router.put("/users/update/:id", userUpdate);
router.delete("/users/delete/:userId", userDelete);
router.post("/groups", groupCreate);
router.get("/groups", groupList);

export default router;