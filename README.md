# Scalable Web App with Authentication & Dashboard

A full-stack task management application built with React, Node.js, Express, and MongoDB featuring JWT authentication, CRUD operations, and a responsive dashboard.

## 📋 Project Overview

This project is a scalable web application that demonstrates modern full-stack development practices with a focus on authentication, security, and clean architecture. It includes user registration/login, protected routes, profile management, and complete task management with search and filter capabilities.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management for authentication

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## ✨ Features Implemented

### Authentication
- ✅ User registration with validation
- ✅ User login with JWT token generation
- ✅ Password hashing with bcrypt
- ✅ Protected routes with JWT verification
- ✅ Token persistence in localStorage
- ✅ Logout functionality

### Dashboard
- ✅ Welcome screen with user information
- ✅ Task statistics (total, completed, pending)
- ✅ Quick navigation to features
- ✅ Responsive design

### Profile Management
- ✅ View user profile information
- ✅ Update user profile (name)
- ✅ Display account creation date

### Task Management (CRUD)
- ✅ Create new tasks with title, description, and status
- ✅ View all tasks in a clean card layout
- ✅ Edit existing tasks
- ✅ Delete tasks with confirmation
- ✅ Mark tasks as completed/pending
- ✅ Search tasks by title or description
- ✅ Filter tasks by status (All/Pending/Completed)
- ✅ Real-time UI updates

### UI/UX
- ✅ Fully responsive design
- ✅ Modern and clean interface
- ✅ Form validation with error messages
- ✅ Loading states
- ✅ Success/error notifications
- ✅ Consistent navigation bar

## 📁 Project Structure

```
project-root/
│
├── frontend/               # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── TaskCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Tasks.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── utils/
│   │   │   └── validators.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── backend/                # Node.js + Express + MongoDB backend
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   ├── authController.js
    │   ├── userController.js
    │   └── taskController.js
    │
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── errorMiddleware.js
    │
    ├── models/
    │   ├── User.js
    │   └── Task.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   ├── userRoutes.js
    │   └── taskRoutes.js
    │
    ├── utils/
    │   └── generateToken.js
    │
    ├── .env.example
    ├── server.js
    └── package.json
```

## 🛠️ How to Run

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskapp
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### MongoDB Setup

**Option 1: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Use connection string: `mongodb://localhost:27017/taskapp`

**Option 2: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a new cluster
- Get your connection string
- Replace `MONGO_URI` in `.env` with your Atlas connection string

## 📚 API Endpoints Reference

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- **Body**: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
- **Response**: `{ "user": { "_id", "name", "email" }, "token": "jwt_token" }`

#### Login User
- **POST** `/api/auth/login`
- **Body**: `{ "email": "john@example.com", "password": "password123" }`
- **Response**: `{ "user": { "_id", "name", "email" }, "token": "jwt_token" }`

### User Routes (Protected)

#### Get User Profile
- **GET** `/api/users/me`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ "_id", "name", "email", "createdAt" }`

#### Update User Profile
- **PUT** `/api/users/me`
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ "name": "Updated Name" }`
- **Response**: `{ "_id", "name", "email", "createdAt" }`

### Task Routes (Protected)

#### Create Task
- **POST** `/api/tasks`
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ "title": "Task Title", "description": "Task Description", "status": "pending" }`
- **Response**: Created task object

#### Get All Tasks
- **GET** `/api/tasks?q=search&status=pending`
- **Headers**: `Authorization: Bearer <token>`
- **Query Params**: 
  - `q` (optional): Search by title or description
  - `status` (optional): Filter by status (pending/completed)
- **Response**: Array of task objects

#### Update Task
- **PUT** `/api/tasks/:id`
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ "title": "Updated Title", "description": "Updated Description", "status": "completed" }`
- **Response**: Updated task object

#### Delete Task
- **DELETE** `/api/tasks/:id`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ "message": "Task deleted successfully" }`

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt before storage
- **JWT Authentication**: Token-based authentication for secure API access
- **Protected Routes**: Middleware to verify JWT tokens on protected endpoints
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Input Validation**: Server-side and client-side validation
- **Environment Variables**: Sensitive data stored in environment variables

## 📈 Scalability & Production Readiness

This application is built with scalability in mind. Here are key considerations for production deployment:

### Architecture Scalability

1. **Microservices Architecture**
   - The current monolithic structure can be split into separate services:
     - Authentication Service
     - User Service
     - Task Service
   - Each service can be scaled independently based on load
   - Use API Gateway (Kong, AWS API Gateway) for routing and load balancing

2. **Database Scaling**
   - **Horizontal Scaling**: MongoDB sharding for distributing data across multiple servers
   - **Read Replicas**: Add read replicas for handling increased read operations
   - **MongoDB Atlas**: Use managed cloud database with auto-scaling
   - **Indexing**: Add indexes on frequently queried fields (user email, task status)
   - **Caching**: Implement Redis for caching frequently accessed data

3. **Frontend Optimization**
   - **Code Splitting**: Lazy load routes and components
   - **CDN**: Serve static assets through CDN (Cloudflare, AWS CloudFront)
   - **State Management**: Migrate to React Query or SWR for better data fetching and caching
   - **Build Optimization**: Production builds with minification and compression
   - **Progressive Web App**: Add service workers for offline capability

4. **Backend Enhancements**
   - **Load Balancing**: Use Nginx or AWS ELB to distribute traffic across multiple server instances
   - **Clustering**: Implement Node.js cluster module to utilize all CPU cores
   - **Rate Limiting**: Add rate limiting middleware (express-rate-limit) to prevent abuse
   - **Request Validation**: Use Joi or express-validator for robust input validation
   - **API Versioning**: Implement versioned APIs (/api/v1/, /api/v2/) for backward compatibility

5. **Authentication & Authorization**
   - **Refresh Tokens**: Implement refresh token mechanism for better security
   - **OAuth 2.0**: Add social login (Google, GitHub) for better user experience
   - **Role-Based Access Control (RBAC)**: Implement user roles and permissions
   - **Multi-Factor Authentication (MFA)**: Add 2FA for enhanced security
   - **Session Management**: Use Redis for session storage in distributed systems

6. **DevOps & Infrastructure**
   - **Containerization**: Dockerize both frontend and backend
     ```dockerfile
     # Example: Frontend and backend in separate containers
     # Use docker-compose for local development
     # Use Kubernetes for production orchestration
     ```
   - **CI/CD Pipeline**: Set up automated testing and deployment (GitHub Actions, GitLab CI, Jenkins)
   - **Monitoring & Logging**:
     - Application monitoring: New Relic, Datadog
     - Log aggregation: ELK Stack (Elasticsearch, Logstash, Kibana)
     - Error tracking: Sentry
     - Structured logging: Winston or Pino
   - **Environment Management**: Separate dev, staging, and production environments
   - **Infrastructure as Code**: Use Terraform or AWS CloudFormation

7. **Performance Optimization**
   - **Compression**: Enable Gzip/Brotli compression for API responses
   - **Connection Pooling**: Configure MongoDB connection pooling
   - **Async Operations**: Use message queues (RabbitMQ, AWS SQS) for time-consuming tasks
   - **Database Query Optimization**: Use aggregation pipelines, proper indexing
   - **API Response Pagination**: Implement cursor-based or offset pagination

8. **Security Hardening**
   - **HTTPS**: Enforce SSL/TLS certificates
   - **Helmet.js**: Add security headers
   - **CORS**: Configure strict CORS policies
   - **SQL Injection Prevention**: Use parameterized queries (already using Mongoose)
   - **XSS Protection**: Sanitize user inputs
   - **Dependency Scanning**: Regular security audits (npm audit, Snyk)
   - **Secrets Management**: Use AWS Secrets Manager or HashiCorp Vault

9. **Testing Strategy**
   - **Unit Tests**: Jest for both frontend and backend
   - **Integration Tests**: Supertest for API testing
   - **End-to-End Tests**: Cypress or Playwright for frontend flows
   - **Load Testing**: Apache JMeter or k6 for performance testing
   - **Code Coverage**: Aim for >80% coverage

10. **Cloud Deployment Options**
    - **AWS**: EC2, ECS, Lambda, RDS, S3, CloudFront
    - **Azure**: App Service, Container Instances, Cosmos DB
    - **Google Cloud**: Cloud Run, GKE, Cloud Storage
    - **Vercel/Netlify**: For frontend deployment
    - **Heroku**: Quick deployment for MVP testing

### Immediate Next Steps for Production

1. Set up proper environment configurations for dev, staging, and production
2. Implement comprehensive error handling and logging
3. Add input validation middleware (express-validator)
4. Set up automated testing suite
5. Configure MongoDB Atlas for cloud database
6. Implement rate limiting and request throttling
7. Add API documentation (Swagger/OpenAPI)
8. Set up monitoring and alerting
9. Implement backup and disaster recovery strategy
10. Add health check endpoints for monitoring

## 🧪 Testing

To run tests (after implementation):

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📝 Additional Notes

- The application uses Context API for state management, suitable for this scale
- All API calls include proper error handling
- The UI is fully responsive and works on mobile, tablet, and desktop
- Form validation is implemented on both client and server sides
- The codebase follows clean code principles with separation of concerns

## 👨‍💻 Development Guidelines

- Follow ESLint rules for code consistency
- Use meaningful variable and function names
- Keep components small and focused
- Write reusable utility functions
- Comment complex logic
- Keep API routes RESTful
- Use async/await for asynchronous operations
- Handle errors gracefully with try-catch blocks

## 📄 License

This project is created for educational and interview purposes.

## 🤝 Contributing

This is a demonstration project for an internship assignment. For improvements or suggestions, feel free to reach out.

---

**Built with ❤️ for Frontend Developer Intern Assignment**
#   T a s k - T o d o  
 