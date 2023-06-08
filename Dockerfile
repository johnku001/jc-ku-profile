# Use the official Node.js 14 image as the base image
FROM node:18
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the application code to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the desired port (default is 3000 for Next.js)
EXPOSE 3000

# Set the command to start the Next.js server
CMD ["yarn", "start"]