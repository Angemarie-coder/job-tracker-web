# Job Tracker Web Application

A modern, full-stack job application tracking platform built with React and Node.js.

## 🚀 Features

- **Job Management**: Add, edit, delete, and track job applications
- **Status Tracking**: Monitor application progress (Applied, Interviewing, Offered, Rejected, Withdrawn)
- **Analytics Dashboard**: Visual insights into your job search progress
- **User Authentication**: Secure login/registration system
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant feedback on all operations

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email functionality

## 📁 Project Structure

```
job-tracker-web/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── AUTHENTICATION_FLOW.md  # Authentication documentation
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/job-tracker-web.git
   cd job-tracker-web
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cd ../backend
   cp env.example .env
   # Edit .env with your configuration
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

7. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/job-tracker
JWT_SECRET=your-secret-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

## 📱 Usage

1. **Register/Login**: Create an account or sign in
2. **Add Jobs**: Track new job applications
3. **Update Status**: Change job status as you progress
4. **View Analytics**: Monitor your job search metrics
5. **Manage Applications**: Edit, delete, or view job details

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run dev  # Start with nodemon for development
```

### Frontend Development
```bash
cd frontend
npm start    # Start React development server
```

### Building for Production
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for job seekers and career development
- Open source and community-driven

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Job Hunting! 🎯**
