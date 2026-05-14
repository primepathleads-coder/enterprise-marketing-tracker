FROM node:20-alpine
WORKDIR /app

# Copy everything from current context
COPY . .

# Detect if we are in the root (has backend folder) or already in backend
RUN if [ -d "backend" ]; then \
      echo "Detected monorepo root, moving to backend..."; \
      cd backend && npm install && npx prisma generate && npm run build && cp -r dist /app/ && cp -r node_modules /app/ && cp -r prisma /app/; \
    else \
      echo "Detected backend subdirectory..."; \
      npm install && npx prisma generate && npm run build; \
    fi

EXPOSE 3000

CMD ["node", "dist/main"]
