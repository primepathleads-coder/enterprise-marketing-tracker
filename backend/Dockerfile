FROM node:20-alpine
WORKDIR /app

# Copy everything
COPY . .

# Build logic
RUN export DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"; \
    if [ -d "backend" ]; then \
      cd backend && npm install && npx prisma generate && npm run build; \
    else \
      npm install && npx prisma generate && npm run build; \
    fi

EXPOSE 3000

# VERBOSE LOGGING: List all files to confirm location, then start
CMD ["sh", "-c", "echo 'Listing /app directory structure:'; find /app -maxdepth 3; export ENTRYPOINT=$(find /app -name main.js | grep dist | head -n 1); if [ -z '$ENTRYPOINT' ]; then echo 'ERROR: main.js not found!'; exit 1; fi; echo 'Starting application from: $ENTRYPOINT'; node $ENTRYPOINT"]
