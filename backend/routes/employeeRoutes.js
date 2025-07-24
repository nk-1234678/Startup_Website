import express from "express";
import {
  getEmployeeProfile,
  registerEmployeeController,
  loginEmployee,
} from "../controllers/employeeController.js";
import { employeeProtect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup",registerEmployeeController); // <--- ✔️ This must exist
router.post("/login", loginEmployee);
router.get("/profile", employeeProtect, getEmployeeProfile);

export default router;
