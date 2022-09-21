import express from "express";
import {
  getUsers,
  Login,
  Logout,
  userDel,
  getUser,
  editUser,
  all,
} from "../controllers/admin/Users.js";
import {
  DeliveryAdd,
  getDeliverys,
  DeliveryDel,
} from "../controllers/admin/Delivery.js";
import {
  customLogin,
  customLogout,
  customRegister,
} from "../controllers/customer/Users.js";
import { allDelivery, update } from "../controllers/customer/Delivery.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/admin/users", verifyToken, getUsers);
router.post("/admin/login", Login);
router.get("/admin/token", refreshToken);
router.get("/admin/:id", getUser);
router.get("/admin", all);
router.put("/admin/:id", editUser);
router.delete("/admin/:id", userDel);
router.delete("/admin/delivery/:id", DeliveryDel);
router.delete("/admin/logout", Logout);
router.post("/admin/delivery/add", DeliveryAdd);
router.get("/admin/delivery/all", getDeliverys);

router.post("/login", customLogin);
router.delete("/logout", customLogout);
router.post("/signup", customRegister);
router.post("/all", allDelivery);
router.post("/update/:id", update);

export default router;
