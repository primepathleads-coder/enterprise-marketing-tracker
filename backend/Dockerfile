FROM node:20-alpine
WORKDIR /app

# Copy the entire context
COPY . .

# Determine if we are in a monorepo root or backend subdirectory
RUN if [ -d "backend" ]; then \
      echo "Building from monorepo root..."; \
      cd backend && npm install && npx prisma generate && npm run build; \
    else \
      echo "Building from backend subdirectory..."; \
      npm install && npx prisma generate && npm run build; \
    fi

EXPOSE 3000

# Use a shell to determine the correct entrypoint at runtime
CMD ["sh", "-c", "if [ -d 'backend/dist' ]; then node backend/dist/main; else node dist/main; fi"]
# Forced Redeploy: 05/14/2026 07:35:31
