# 🚀 Startup_Website

A full-stack startup web application built with **Vite + React (frontend)** and **Express + MongoDB (backend)**. This project is structured for clean development, scalable deployment, and easy local setup.

---

## 🗂 Folder Structure

Startup_Website/
├── backend/ # Express.js Backend
│ ├── config/ # DB and environment configs
│ ├── controllers/ # Route logic handlers
│ ├── middleware/ # Auth, error handling, etc.
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── uploads/ # File uploads (images, docs)
│ ├── utils/ # Helper utilities
│ ├── .env # Environment variables
│ ├── index.js # Entry point
│ ├── package.json # Backend dependencies
│
├── frontend/ # React + Vite Frontend
│ ├── public/ # Static files
│ ├── src/ # Source code (components, pages)
│ ├── index.html # HTML template
│ ├── tailwind.config.js # Tailwind CSS config
│ ├── vite.config.js # Vite config
│ ├── package.json # Frontend dependencies
│
└── README.md # Project documentation

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
