# Deployment Guide

This guide provides instructions for deploying the Enterprise Marketing Tracker platform using the lean MVP infrastructure.

## Infrastructure Stack
- **Frontend**: Next.js (Standalone mode)
- **Backend**: NestJS
- **Queue**: BullMQ (Redis-backed)
- **Primary DB**: PostgreSQL
- **Analytics DB**: ClickHouse

## Deployment Options

### 1. Docker Compose (Recommended for self-hosting)
To spin up the entire stack (DBs and Queues):
```bash
docker-compose up -d
```
Then, build and run your application containers or use the provided Dockerfiles.

### 2. Managed Platforms (Railway / Render / Vercel)

#### Backend (Railway / Render)
1. Connect your repository.
2. Set the root directory to `backend/`.
3. Add the environment variables from `backend/.env.example`.
4. Ensure a Redis and PostgreSQL instance are available and linked.
5. The `Dockerfile` in `backend/` will handle the build.

#### Frontend (Vercel)
1. Connect your repository.
2. Set the root directory to `frontend/`.
3. Vercel will automatically detect the Next.js project.
4. Add environment variables from `frontend/.env.example`.

## Environment Variables
Ensure all variables in the respective `.env.example` files are set in your production environment.

## Post-Deployment Validation
- Access `http://your-backend-url/health` to verify backend status.
- Test tracking by hitting `http://your-backend-url/tracking/click?camp_id=test`.
- Verify the real-time dashboard updates on your frontend.

---

## 🚀 Beginner's Deployment Checklist

Follow these steps for a smooth "First-Time" deployment:

### 1. Preparation
- [ ] Create a new GitHub repository and push your code.
- [ ] Sign up for **Railway.app** (Backend/DBs) and **Vercel** (Frontend).

### 2. Database & Queue Setup (Railway)
- [ ] Create a **PostgreSQL** service on Railway.
- [ ] Create a **Redis** service on Railway.
- [ ] Create a **ClickHouse** service on Railway (or use an external provider like ClickHouse Cloud).

### 3. Backend Deployment (Railway)
- [ ] Link your GitHub repo to Railway.
- [ ] Set the "Root Directory" to `backend/`.
- [ ] Copy `DATABASE_URL` and `REDIS_URL` from the Railway database services.
- [ ] Fill in the rest of the variables from `backend/.env.example`.
- [ ] Ensure the port is set to `3000`.

### 4. Frontend Deployment (Vercel)
- [ ] Link your GitHub repo to Vercel.
- [ ] Set the "Root Directory" to `frontend/`.
- [ ] Add `NEXT_PUBLIC_API_URL` (points to your Railway backend URL).
- [ ] Add `NEXT_PUBLIC_WS_URL` (same as API URL).

### 5. Final Check
- [ ] Check the Railway logs to ensure the backend is running.
- [ ] Check the Vercel build logs.
- [ ] Visit your frontend URL and confirm the dashboard loads.
