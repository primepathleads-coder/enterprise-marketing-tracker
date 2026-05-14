FROM node:20-alpine
WORKDIR /app

# Copy the backend folder specifically to handle the monorepo structure
COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY backend/ ./backend/
# Generate Prisma client inside the backend folder
RUN cd backend && npx prisma generate && npm run build

EXPOSE 3000

# Start the NestJS application from the dist folder
CMD ["node", "backend/dist/main"]
