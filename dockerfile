# Use an official Node.js image to build the frontend
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire frontend project and build it
COPY . .
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
