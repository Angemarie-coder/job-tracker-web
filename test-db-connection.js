#!/usr/bin/env node

/**
 * Test script to verify MongoDB connection
 * Run this to test your database connection locally
 */

require('dotenv').config();
const mongoose = require('mongoose');

console.log('🧪 Testing MongoDB Connection...\n');

// Test connection
async function testConnection() {
  try {
    console.log('🔌 Attempting to connect...');
    console.log(`📍 URI: ${process.env.MONGODB_URI ? 'MongoDB Atlas (hidden for security)' : 'mongodb://localhost:27017/job-tracker'}`);
    
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/job-tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('\n✅ SUCCESS: MongoDB Connected!');
    console.log(`🌐 Host: ${conn.connection.host}`);
    console.log(`🗄️  Database: ${conn.connection.name}`);
    console.log(`🔗 Connection State: ${conn.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
    
    // Test a simple operation
    const collections = await conn.connection.db.listCollections().toArray();
    console.log(`📚 Collections found: ${collections.length}`);
    
    if (collections.length > 0) {
      console.log('📋 Collection names:');
      collections.forEach(col => console.log(`   - ${col.name}`));
    }
    
    await mongoose.connection.close();
    console.log('\n🔄 Connection closed successfully');
    
  } catch (error) {
    console.error('\n❌ ERROR: Failed to connect to MongoDB');
    console.error(`💬 Error: ${error.message}`);
    console.error('\n💡 Troubleshooting tips:');
    console.error('   1. Check if MONGODB_URI is set in your .env file');
    console.error('   2. Verify your MongoDB Atlas connection string');
    console.error('   3. Make sure your IP is whitelisted in MongoDB Atlas');
    console.error('   4. Check if your MongoDB Atlas cluster is running');
    
    process.exit(1);
  }
}

// Run the test
testConnection();
