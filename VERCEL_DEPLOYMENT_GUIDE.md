# 🚀 Vercel Deployment Guide

## **🔧 Environment Variables Setup**

You need to set these environment variables in your Vercel dashboard to fix the connection issues.

### **Step 1: Go to Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Sign in to your account
3. Click on your **job-tracker** project

### **Step 2: Add Environment Variables**
1. Click **"Settings"** tab
2. Click **"Environment Variables"** in the left sidebar
3. Add each variable one by one:

#### **Frontend Variables (Build-time):**
```
Name: REACT_APP_API_URL
Value: https://job-tracker-rj0narvba-angemarie-coders-projects.vercel.app/api
Scope: Production, Preview, Development
```

#### **Backend Variables (Runtime):**
```
Name: NODE_ENV
Value: production
Scope: Production, Preview, Development
```

```
Name: MONGODB_URI
Value: your_mongodb_atlas_connection_string_here
Scope: Production, Preview, Development
```

```
Name: JWT_SECRET
Value: your_super_secret_jwt_key_here
Scope: Production, Preview, Development
```

```
Name: FRONTEND_URL
Value: https://job-tracker-rj0narvba-angemarie-coders-projects.vercel.app
Scope: Production, Preview, Development
```

### **Step 3: Redeploy**
1. After adding all variables, go to **"Deployments"** tab
2. Click **"Redeploy"** on your latest deployment
3. Wait for the build to complete

### **Step 4: Test**
1. Test the health check: `https://job-tracker-rj0narvba-angemarie-coders-projects.vercel.app/api/health`
2. Test the frontend: `https://job-tracker-rj0narvba-angemarie-coders-projects.vercel.app`

## **🔍 What Each Variable Does:**

- **`REACT_APP_API_URL`**: Tells frontend where to find the backend API
- **`NODE_ENV`**: Sets production mode for security and performance
- **`MONGODB_URI`**: Your MongoDB Atlas database connection string
- **`JWT_SECRET`**: Secret key for JWT token encryption
- **`FRONTEND_URL`**: Allows backend to accept requests from your frontend

## **⚠️ Important Notes:**

1. **`REACT_APP_` prefix is required** for React to read the variable
2. **All variables must have Production scope** for live deployment
3. **MongoDB URI must be accessible** from Vercel's servers
4. **JWT_SECRET should be long and random** (at least 32 characters)

## **🚨 If You Don't Have MongoDB Atlas:**

1. Go to [mongodb.com](https://mongodb.com)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `your_mongodb_atlas_connection_string_here` with the actual string

## **🎯 Expected Result:**

After setting these variables and redeploying:
- ✅ Frontend loads without errors
- ✅ Backend API responds at `/api/health`
- ✅ No more "connection refused" errors
- ✅ Your app works in production!

## **📞 Need Help?**

If you get stuck:
1. Check Vercel build logs for errors
2. Verify all environment variables are set correctly
3. Make sure MongoDB Atlas is accessible
4. Test the health check endpoint first
