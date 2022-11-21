import { Router } from "express";
import { health } from "../api/health/controllers/health.controllers.js";
import { userCreate } from "../api/users/controllers/userCreate.controller.js";
import { userList } from "../api/users/controllers/userList.controller.js";
import { groupCreate } from "../api/groups/controllers/groupCreate.controller.js";
import { groupList } from "../api/groups/controllers/groupList.controller.js";
import { userDelete } from "../api/users/controllers/userDelete.controller.js";
import { userUpdate } from "../api/users/controllers/userUpdate.controller.js";
import { groupDelete } from "../api/groups/controllers/groupDelete.controller.js";
import { groupUpdate } from "../api/groups/controllers/groupUpdate.controller.js";
import { joinGroup } from "../api/groups/controllers/joinGroup.controller.js";
import { paymentList } from "../api/payments/controllers/paymentList.controller.js";
import { paymentCreate } from "../api/payments/controllers/paymentCreate.controller.js";
import { paymentUpdate } from "../api/payments/controllers/paymentUpdate.controller.js";
import { paymentDelete } from "../api/payments/controllers/paymentDelete.controller.js";
import { joinGroupDelete } from "../api/groups/controllers/joinGroupDelete.controller.js";


const router = Router();

router.get("/", health);
router.get("/users", userList);
router.post("/users", userCreate);
router.put("/users/update/:id", userUpdate);
router.delete("/users/delete/:id", userDelete);
router.post("/groups", groupCreate);
router.get("/groups", groupList);
router.put("/groups/update/:id", groupUpdate);
router.delete("/groups/delete/:id", groupDelete);
router.put("/groups/join/:groupId", joinGroup);
router.put("/groups/deleteJoinedUser/:groupId", joinGroupDelete);
router.get("/payments", paymentList);
router.post("/payments", paymentCreate);
router.put("/payments/update/:id", paymentUpdate);
router.delete("/payments/delete/:id", paymentDelete);

export default router;