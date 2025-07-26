# 🚀 Startup_Website

A full-stack startup web application built with **Vite + React (frontend)** and **Express + MongoDB (backend)**. This project is structured for clean development, scalable deployment, and easy local setup.

---

## 🗂 Folder Structure

/E-commerce
├── /public
│   └── index.html
├── /src
│   ├── /assets                     # Images, logos, icons
│   ├── /components                # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   └── UserMenu.jsx           # User icon dropdown: Login/Signup/Logout
│   ├── /context                   # Global state (Cart, Auth)
│   │   ├── CartContext.js
│   │   └── AuthContext.js
│   ├── /layouts                   # App layouts
│   │   ├── CustomerLayout.jsx     # With Navbar + Footer
│   │   └── AdminLayout.jsx        # With Sidebar + Dashboard UI
│   ├── /pages
│   │   ├── /customer
│   │   │   ├── Home.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Artisans.jsx
│   │   │   ├── EmployeeLogin.jsx
│   │   │   └── EmployeeSignup.jsx
│   │   │   ├── OrderSuccess.jsx
│   │   │   └── Checkout.jsx
│   │   ├── /admin
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminSignup.jsx
│   │   │   └── Profile.jsx //admin profile
│   │   └── Error401.jsx           # 🔐 Unauthorized route
│   ├── /routes                    # Routing configs
│   │   ├── CustomerRoutes.jsx
│   │   ├── AdminRoutes.jsx
│   │   ├── CompoundRoutes.jsx     # Combines admin & customer routes
│   │   └── ProtectedRoute.jsx     # Guards for admin routes
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Global Tailwind/custom CSS
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- MongoDB (local or cloud like MongoDB Atlas)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Startup_Website.git
cd Startup_Website

Backend Setup: 
cd backend
npm install

Start the server:
npm run dev

Frontend Setup:
cd frontend
npm install
npm run dev

🌐 Tech Stack
Frontend
React 19 + Vite

Tailwind CSS

Axios

React Router DOM

Framer Motion

Chart.js + React-Chartjs-2

Backend
Express.js

MongoDB + Mongoose

Multer (file upload)

Cloudinary (image hosting)

JWT (authentication)

bcryptjs

dotenv

cookie-parser

cors

📁 Features (Modular Breakdown)
🔒 Auth: Secure JWT-based login/signup

☁️ Cloudinary Integration: For uploading and hosting images

📈 Charts: Dashboard data visualization

🧩 Modular Codebase: Scalable file structure

🧾 API Ready: Cleanly separated controllers and routes

📸 Screenshots
(You can insert screenshots here by uploading images or using markdown image tags)

💡 Contributing
Fork this repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit your changes (git commit -m "Added something")

Push to the branch (git push origin feature-name)

Open a Pull Request

