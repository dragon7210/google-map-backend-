import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  userDel,
  getUser,
  editUser,
  all,
} from "../controllers/Users.js";
import {
  DeliveryAdd,
  getDeliverys,
  DeliveryDel,
} from "../controllers/Delivery.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/signup", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.get("/:id", getUser);
router.get("/", all);
router.put("/:id", editUser);
router.delete("/:id", userDel);
router.delete("/delivery/:id", DeliveryDel);
router.delete("/logout", Logout);
router.post("/delivery/add", DeliveryAdd);
router.get("/delivery/all", getDeliverys);

export default router;
