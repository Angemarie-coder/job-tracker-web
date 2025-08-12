# Job Tracker Backend API

A robust, scalable backend API for the Job Tracker application built with Node.js, Express, and MongoDB.

## 🚀 Features

- **🔐 Authentication & Authorization**: JWT-based authentication with secure password hashing
- **📊 Job Management**: Full CRUD operations for job applications
- **📈 Analytics & Insights**: Comprehensive job search analytics and reporting
- **👤 User Profiles**: Rich user profiles with education, skills, and preferences
- **🛡️ Security**: Input validation, rate limiting, and security headers
- **📝 Interview Tracking**: Track interview schedules and outcomes
- **🔍 Advanced Search**: Filtering, sorting, and pagination for jobs
- **📱 RESTful API**: Clean, consistent API design

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express-validator
- **Security**: Helmet, CORS, Rate Limiting
- **Error Handling**: Custom error classes and middleware

## 📁 Project Structure

```
backend/
├── config/           # Configuration files
│   └── database.js   # MongoDB connection
├── middleware/       # Custom middleware
│   ├── auth.js       # Authentication middleware
│   └── error.js      # Error handling middleware
├── models/           # Database models
│   ├── Job.js        # Job application model
│   └── User.js       # User model
├── routes/           # API routes
│   ├── auth.js       # Authentication routes
│   ├── jobs.js       # Job management routes
│   ├── users.js      # User profile routes
│   └── analytics.js  # Analytics routes
├── server.js         # Main server file
├── package.json      # Dependencies
└── README.md         # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository and navigate to backend**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/job-tracker
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=30d
   FRONTEND_URL=http://localhost:3000
   ```

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

The API will be available at `http://localhost:5000`

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Job Management

#### Get All Jobs
```http
GET /jobs?status=applied&search=engineer&page=1&limit=20
Authorization: Bearer <token>
```

#### Create Job
```http
POST /jobs
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Senior Software Engineer",
  "company": "Tech Corp",
  "location": "San Francisco, CA",
  "status": "applied",
  "applicationDate": "2024-01-15",
  "description": "Full-stack development role",
  "salary": "$120,000 - $150,000"
}
```

#### Update Job Status
```http
PATCH /jobs/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "interviewing"
}
```

#### Add Interview
```http
POST /jobs/:id/interviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2024-01-20T10:00:00Z",
  "type": "phone",
  "notes": "Initial screening call"
}
```

### Analytics

#### Get Job Statistics
```http
GET /analytics/stats
Authorization: Bearer <token>
```

#### Get Company Insights
```http
GET /analytics/companies?limit=10
Authorization: Bearer <token>
```

#### Get Interview Performance
```http
GET /analytics/interviews
Authorization: Bearer <token>
```

### User Management

#### Get User Profile
```http
GET /users/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "John",
  "location": "New York, NY",
  "skills": ["JavaScript", "React", "Node.js"]
}
```

#### Update Preferences
```http
PUT /users/preferences
Authorization: Bearer <token>
Content-Type: application/json

{
  "jobTypes": ["full-time", "remote"],
  "remotePreference": "remote",
  "salaryRange": {
    "min": 80000,
    "max": 150000,
    "currency": "USD"
  }
}
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Comprehensive request validation
- **Rate Limiting**: API rate limiting to prevent abuse
- **Security Headers**: Helmet.js for security headers
- **CORS Protection**: Configurable CORS settings
- **Data Sanitization**: Input sanitization and validation

## 📊 Database Models

### User Model
- Personal information (name, email, phone, location)
- Professional details (skills, experience, bio)
- Education history
- Job preferences
- Resume management
- Authentication fields

### Job Model
- Job details (title, company, location, description)
- Application tracking (status, dates, notes)
- Interview management (dates, types, outcomes)
- Contact information
- Tags and priority levels
- File attachments

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Environment Variables
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `JWT_EXPIRE`: JWT expiration time
- `FRONTEND_URL`: Frontend application URL

### Production Considerations
- Use environment-specific MongoDB connections
- Set strong JWT secrets
- Configure proper CORS origins
- Enable rate limiting
- Set up logging and monitoring
- Use HTTPS in production

## 📈 Performance Features

- **Database Indexing**: Optimized queries with proper indexes
- **Pagination**: Efficient data pagination
- **Aggregation Pipelines**: MongoDB aggregation for analytics
- **Compression**: Response compression middleware
- **Caching**: Ready for Redis integration

## 🔧 Customization

### Adding New Routes
1. Create route file in `routes/` directory
2. Add validation using express-validator
3. Implement business logic
4. Add to `server.js`

### Adding New Models
1. Create model file in `models/` directory
2. Define schema with validation
3. Add indexes for performance
4. Create corresponding routes

### Adding New Middleware
1. Create middleware file in `middleware/` directory
2. Export middleware function
3. Apply in `server.js` or specific routes

## 🐛 Error Handling

The API uses a centralized error handling system:
- Custom `AppError` class
- Global error handler middleware
- Consistent error response format
- Development vs production error details

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    // Validation errors (if any)
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the API documentation
- Review the error logs

---

**Happy Coding! 🚀**
