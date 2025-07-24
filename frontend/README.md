# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🛒 MERN Stack E-Commerce Platform

This is a full-stack e-commerce web application built with the **MERN stack**:

- ⚛️ React (Vite) for the frontend
- 🧠 Node.js & Express for the backend
- 🍃 MongoDB for database
- 🔐 JWT Authentication for Admin & Employee

---

## 📁 Project Structure

FullstE/
├── EFrontend (React + Vite)
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/Footer,Navbar,Sidebar,PaymentQR
│ │ ├── context/ # AuthContext, CartContext
│ │ ├── layouts/ # AdminLayout, CustomerLayout
│ │ ├── pages/
│ │ │ ├── /admin/ # AdminLogin, AdminSignup, Profile
│ │ │ ├── /customer/ # Home, Shop, Cart,Artisan,regionalProduct,regionData, EmployeeLogin/Signup,OrderSuccess,ProductDetails,Checkout
│ │ ├── routes/
│ │ │ ├── CustomerRoutes.jsx
│ │ │ ├── AdminRoutes.jsx
│ │ │ └── ProtectedRoute.jsx
    ├── services/orderService.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js

├── Backend/ # Backend (Node.js + Express + MongoDB)
│ ├── controllers/
│ │ ├── adminController.js
│ │ └── employeeController.js
    └── orderController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── adminModel.js
│ │ └── employeeModel.js
    └── orderModel.js
    └── productModel.js
│ ├── routes/
│ │ ├── adminRoute.js
│ │ └── employeeRoute.js
    └── orderRoute.js
│ ├── .env
│ ├── index.js
│ ├── package.json
│ └── config/
│ └── db.js

yaml
Copy code

---

## 🚀 Getting Started

### 🔧 Backend Setup

1. Navigate to backend folder:
```bash
cd Backend
Install dependencies:

bash
Copy code
npm install
Create a .env file:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend server:

bash
Copy code
npm run dev
🌐 Frontend Setup (Vite + React)
Navigate to frontend folder:

bash
Copy code
cd E-commerce
Install dependencies:

bash
Copy code
npm install
Configure vite.config.js for API proxy:

js
Copy code
server: {
  proxy: {
    '/api': 'http://localhost:5000',
  },
},
Run frontend:

bash
Copy code
npm run dev
👥 Authentication Flow
Admin and Employee have separate signup/login pages

Role-based route protection using ProtectedRoute.jsx

JWT-based authentication using backend API

MongoDB stores all user records in:

admins collection

employees collection

📌 Features
✅ Admin & Employee authentication

🛍️ E-commerce UI with Cart, Shop, Home pages

🔐 Protected routes with role-based access

📦 Clean folder structure

⚡ Vite for fast development

