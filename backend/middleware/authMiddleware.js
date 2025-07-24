import jwt from "jsonwebtoken";
import Customer from "../models/customerModel.js";
import Admin from "../models/Admin.js";
import Employee from "../models/employeeModel.js"; // ✅ Import employee model

// Universal middleware to protect all routes, with optional role-based access
export const protect = (role = null) => async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Identify user based on role
      if (decoded.role === "admin") {
        req.user = await Admin.findById(decoded.id).select("-password");
      } else if (decoded.role === "customer") {
        req.user = await Customer.findById(decoded.id).select("-password");
      } else if (decoded.role === "employee") {
        req.user = await Employee.findById(decoded.id).select("-password");
      }

      // If user not found
      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Role check (if passed role doesn't match user role)
      if (role && decoded.role !== role) {
        return res.status(403).json({ message: "Access denied" });
      }

      // Pass user role and data to req for later use
      req.role = decoded.role;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied" });
  }
};

// Protect route for customer only
export const customerProtect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const customer = await Customer.findById(decoded.id).select("-password");

    if (!customer) {
      return res.status(401).json({ message: "Customer not found" });
    }

    req.customer = customer;
    next();
  } catch (error) {
    console.error("Customer Auth Error:", error.message);
    res.status(401).json({ message: "Unauthorized - Invalid Token" });
  }
};

// ✅ Protect route for employee only
export const employeeProtect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const employee = await Employee.findById(decoded.id).select("-password");

    if (!employee) {
      return res.status(401).json({ message: "Employee not found" });
    }

    req.employee = employee;
    next();
  } catch (error) {
    console.error("Employee Auth Error:", error.message);
    res.status(401).json({ message: "Unauthorized - Invalid Token" });
  }
};
