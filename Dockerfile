# Use the official Node.js image
FROM node:20.16.0

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Use a lightweight web server to serve static files
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port Serve will use
EXPOSE 3000
