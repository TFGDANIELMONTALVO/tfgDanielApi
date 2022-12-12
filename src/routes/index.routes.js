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
import { userLogin } from "../api/users/controllers/userLogin.controller.js";
import { groupById } from "../api/groups/controllers/groupById.controller.js";
import { userById } from "../api/users/controllers/userById.controller.js";
import { getPaymentsByOwnerId } from "../api/payments/controllers/getPaymentsByOwnerId.controller.js";


const router = Router();

router.get("/", health);
router.get("/users", userList);
router.post("/users", userCreate);
router.post("/groups", groupCreate);
router.get("/groups", groupList);
router.get("/payments", paymentList);
router.post("/payments", paymentCreate);
router.post("/users/login", userLogin);
router.get("/payments/:id", getPaymentsByOwnerId)
router.get("/user/:id", userById);
router.get("/groups/:id", groupById);
router.put("/users/update/:id", userUpdate);
router.delete("/users/delete/:id", userDelete);
router.put("/groups/update/:id", groupUpdate);
router.delete("/groups/delete/:id", groupDelete);
router.put("/groups/join/:groupId", joinGroup);
router.put("/groups/deleteJoinedUser/:groupId", joinGroupDelete);
router.put("/payments/update/:id", paymentUpdate);
router.delete("/payments/delete/:id", paymentDelete);

export default router;