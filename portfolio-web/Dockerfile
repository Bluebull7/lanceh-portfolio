# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Serve the app using a static file server
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to serve the build directory
CMD ["serve", "-s", "build", "-l", "3000"]
