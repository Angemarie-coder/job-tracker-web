# Deployment Guide

This guide will help you deploy your Job Tracker application to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Frontend) + Railway (Backend) - Recommended

#### Frontend (Vercel)
1. **Push to GitHub** (follow the steps below)
2. Go to [Vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" and import your repository
4. Set build settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `cd frontend && npm run build`
   - **Output Directory**: `frontend/build`
   - **Install Command**: `npm run install:all`
5. Add environment variables:
   - `REACT_APP_API_URL`: Your backend URL
6. Deploy!

#### Backend (Railway)
1. Go to [Railway.app](https://railway.app) and sign up with GitHub
2. Click "New Project" and select "Deploy from GitHub repo"
3. Select your repository
4. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your secret key
   - `EMAIL_USER`: Your email
   - `EMAIL_PASS`: Your email password
5. Deploy!

### Option 2: Netlify (Frontend) + Render (Backend)

#### Frontend (Netlify)
1. Go to [Netlify.com](https://netlify.com) and sign up
2. Click "New site from Git" and connect your GitHub repo
3. Set build settings:
   - **Build command**: `cd frontend && npm run build`
   - **Publish directory**: `frontend/build`
4. Deploy!

#### Backend (Render)
1. Go to [Render.com](https://render.com) and sign up
2. Click "New Web Service" and connect your GitHub repo
3. Set environment variables and deploy!

## 🌐 Environment Variables

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job-tracker
JWT_SECRET=your-super-secret-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
```

## 📱 Production Checklist

- [ ] Environment variables configured
- [ ] Database connection string updated
- [ ] JWT secret changed from default
- [ ] Email credentials configured
- [ ] Frontend API URL updated
- [ ] CORS settings configured for production domain
- [ ] SSL/HTTPS enabled
- [ ] Error logging configured
- [ ] Performance monitoring set up

## 🔧 CORS Configuration

Update your backend CORS settings for production:

```javascript
// In backend/server.js
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com', 'https://www.yourdomain.com']
    : 'http://localhost:3000',
  credentials: true
}));
```

## 📊 Monitoring & Analytics

Consider adding:
- **Error tracking**: Sentry, LogRocket
- **Performance monitoring**: New Relic, DataDog
- **Analytics**: Google Analytics, Mixpanel
- **Uptime monitoring**: UptimeRobot, Pingdom

## 🚨 Security Considerations

- [ ] Use strong JWT secrets
- [ ] Enable HTTPS everywhere
- [ ] Set secure headers
- [ ] Rate limiting enabled
- [ ] Input validation
- [ ] SQL injection protection
- [ ] XSS protection

## 📈 Scaling Considerations

- **Database**: Consider MongoDB Atlas for scaling
- **Caching**: Redis for session storage
- **CDN**: Cloudflare for static assets
- **Load Balancing**: Multiple backend instances

---

**Happy Deploying! 🚀**
