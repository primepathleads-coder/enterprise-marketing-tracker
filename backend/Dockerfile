FROM node:20-alpine
WORKDIR /app

# Copy everything
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

# DYNAMIC DISCOVERY: Find main.js in any dist folder and run it
CMD ["sh", "-c", "export ENTRYPOINT=$(find /app -name main.js | grep dist | head -n 1); echo 'Starting entrypoint: $ENTRYPOINT'; node $ENTRYPOINT"]
