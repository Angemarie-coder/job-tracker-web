#!/usr/bin/env node

/**
 * Generate secure secrets for your application
 * Run this script to generate secure random strings
 */

const crypto = require('crypto');

console.log('🔐 Generating secure secrets for your application...\n');

// Generate JWT Secret (64 characters)
const jwtSecret = crypto.randomBytes(32).toString('hex');
console.log('JWT_SECRET:');
console.log(jwtSecret);
console.log('');

// Generate a random string for other purposes
const randomSecret = crypto.randomBytes(16).toString('hex');
console.log('RANDOM_SECRET:');
console.log(randomSecret);
console.log('');

console.log('📋 Copy these values to your Vercel environment variables:');
console.log('1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables');
console.log('2. Add JWT_SECRET with the value above');
console.log('3. Make sure to set scope to "Production, Preview, Development"');
console.log('4. Redeploy your project');
console.log('');

console.log('⚠️  Keep these secrets secure and never commit them to your repository!');
