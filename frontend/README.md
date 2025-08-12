# Job Tracker - Frontend

A modern job tracking platform built with React, featuring a complete authentication system with email verification.

## 🚀 Features

### Authentication & Security
- **Complete User Registration & Login** with JWT tokens
- **Email Verification Flow** - Users must verify their email before accessing the app
- **Password Reset** via email with secure tokens
- **Protected Routes** - Unauthenticated users are redirected to login
- **Secure Token Management** with automatic expiration handling

### Job Management
- **Dashboard** with job statistics and recent applications
- **Job CRUD Operations** - Create, read, update, and delete job applications
- **Status Tracking** - Track application progress (applied, interviewing, offered, etc.)
- **Search & Filtering** - Find jobs by company, status, or keywords
- **Real-time Updates** - All changes sync with the backend database

### User Experience
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **Loading States** - Smooth user experience with loading indicators
- **Error Handling** - Comprehensive error messages and validation

## 🔐 Authentication Flow

### 1. User Registration
1. User fills out registration form
2. System creates account and sends verification email
3. User sees success page with instructions to check email
4. **No login until email is verified**

### 2. Email Verification
1. User clicks verification link in email
2. System verifies token and marks email as verified
3. User is automatically redirected to login page
4. Success message confirms verification

### 3. User Login
1. User enters credentials on login page
2. System checks email verification status
3. If verified, user receives JWT token and access to dashboard
4. If not verified, user sees error message

### 4. Password Reset (Optional)
1. User clicks "Forgot Password" on login page
2. System sends password reset email
3. User clicks reset link and sets new password
4. User can then login with new credentials

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Hooks
- **Routing**: React Router DOM v6
- **State Management**: React Context API with useReducer
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **HTTP Client**: Axios with interceptors
- **Date Handling**: date-fns
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.js       # Navigation with authentication state
├── context/            # React Context providers
│   ├── AuthContext.js  # Authentication state management
│   └── JobContext.js   # Job data state management
├── pages/              # Application pages
│   ├── Dashboard.js    # Main dashboard view
│   ├── Login.js        # User login form
│   ├── Register.js     # User registration form
│   ├── RegistrationSuccess.js  # Post-registration success page
│   ├── EmailVerification.js    # Email verification handler
│   ├── ForgotPassword.js       # Password reset request
│   ├── ResetPassword.js        # Password reset form
│   ├── JobList.js      # Job listing and management
│   └── AddJob.js       # Add new job form
├── services/           # API service layer
│   ├── api.js          # Axios configuration and interceptors
│   ├── authService.js  # Authentication API calls
│   └── jobService.js   # Job management API calls
└── App.js              # Main application component with routing
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Backend server running (see backend README)
- MongoDB database configured
- Email service configured (SMTP settings)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-tracker-web/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000/api` |
| `REACT_APP_ENV` | Application environment | `development` |

### Email Service Setup

The backend requires SMTP configuration for email verification:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 📱 Usage

### For New Users
1. Navigate to `/register`
2. Fill out the registration form
3. Check your email for verification link
4. Click the verification link
5. Login with your credentials
6. Access your dashboard

### For Existing Users
1. Navigate to `/login`
2. Enter your email and password
3. Access your dashboard

### Managing Jobs
1. **Add Job**: Click "Add Job" in navigation
2. **View Jobs**: Click "Jobs" to see all applications
3. **Update Status**: Change job status as you progress
4. **Delete Jobs**: Remove applications you no longer need

## 🔒 Security Features

- **JWT Authentication** with automatic token refresh
- **Email Verification** prevents unauthorized access
- **Password Hashing** with bcrypt
- **Token Expiration** with automatic logout
- **Protected Routes** with authentication guards
- **Input Validation** on all forms
- **CSRF Protection** through proper API design

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run serve
```

## 🚀 Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Automatic deployments from Git
- **Netlify**: Drag and drop deployment
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for public repositories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify your environment variables are set correctly
3. Ensure the backend server is running
4. Check that MongoDB is accessible
5. Verify email service configuration

## 🔄 API Integration

The frontend integrates with the backend API endpoints:

- **Authentication**: `/api/auth/*`
- **Jobs**: `/api/jobs/*`
- **Analytics**: `/api/analytics/*`
- **Users**: `/api/users/*`

All API calls include JWT authentication headers and handle errors gracefully.
