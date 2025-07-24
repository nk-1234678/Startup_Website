import Employee from "../models/employeeModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerEmployeeController = async (req, res) => {
  try {
    const { name, email, password, position } = req.body;

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new Employee({
      name,
      email,
      password: hashedPassword,
      position,
    });

    await newEmployee.save();

    const token = jwt.sign({ id: newEmployee._id, role: 'employee' }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({
      success: true,
      message: 'Employee registered successfully',
      employee: {
        _id: newEmployee._id,
        name: newEmployee.name,
        email: newEmployee.email,
        position: newEmployee.position,
        role: 'employee',
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in employee registration', error });
  }
};

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;

    const found = await Employee.findOne({ email });
    if (!found) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, found.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: found._id, role: "employee" }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

   res.status(200).json({
  token,
  employee: {
    _id: found._id,
    name: found.name,
    email: found.email,
    position: found.position,
    role: "employee",
  },
});

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getEmployeeProfile = async (req, res) => {
  try {
    const employee = req.employee;

    res.status(200).json({
      success: true,
      employee: {
        _id: employee._id,
        name: employee.name,
        email: employee.email,
        position: employee.position,
        createdAt: employee.createdAt,
      },
    });
  } catch (error) {
    console.error("Error fetching employee profile:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

