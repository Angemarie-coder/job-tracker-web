#!/bin/bash

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Build the project
npm run build

# Exit with the build result
exit $?
