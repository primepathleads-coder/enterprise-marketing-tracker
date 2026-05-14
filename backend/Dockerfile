FROM node:20-alpine
WORKDIR /app

# Copy everything
COPY . .

# Build logic for Prisma 7
RUN if [ -d "backend" ]; then \
      cd backend && npm install && npx prisma generate && npm run build; \
    else \
      npm install && npx prisma generate && npm run build; \
    fi

EXPOSE 3000

# DYNAMIC DISCOVERY: Find main.js in any dist folder and run it
CMD ["sh", "-c", "export ENTRYPOINT=$(find /app -name main.js | grep dist | head -n 1); echo 'Starting application from: $ENTRYPOINT'; node $ENTRYPOINT"]
