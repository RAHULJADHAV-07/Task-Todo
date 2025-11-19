# Task Management Application

A full-stack task management web application with authentication and CRUD operations.

## Tech Stack

**Frontend:** React, Vite, TailwindCSS, React Router, Axios  
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Features

- User authentication (Register/Login)
- JWT-based authorization
- Dashboard with task statistics
- Create, read, update, and delete tasks
- Search tasks by title/description
- Filter tasks by status (All/Pending/Completed)
- User profile management
- Responsive design

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```

Create .env file with:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
Start server:
Frontend Setup
Navigate to frontend folder:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Start development server:
```bash
npm run dev
```
Open browser at http://localhost:5173

### API Endpoints
- Auth
 ``` 
 POST /api/auth/register - Register new user
 POST /api/auth/login - Login user
  ```
- User
```
GET /api/users/me - Get user profile (protected)
PUT /api/users/me - Update user profile (protected)
```
- Tasks
```
GET /api/tasks - Get all user tasks (protected)
POST /api/tasks - Create new task (protected)
PUT /api/tasks/:id - Update task (protected)
DELETE /api/tasks/:id - Delete task (protected)
```
### Usage
- Register a new account
- Login with credentials
- Access dashboard to view task statistics
- Create, edit, delete, and manage tasks
- Use search and filters to organize tasks
- Update your profile information
  
### Project Structure
```
├── backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Auth & error middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── utils/          # Helper functions
│
└── frontend/
    └── src/
        ├── components/ # Reusable components
        ├── pages/      # Page components
        ├── context/    # Auth context
        ├── services/   # API services
        └── utils/      # Utility functions
