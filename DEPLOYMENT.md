# 🚀 Deployment Guide - Vercel + Neon PostgreSQL

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Neon account (sign up at https://neon.tech)

## Step-by-Step Deployment

### 1️⃣ Set Up Neon Database

1. Go to [https://neon.tech](https://neon.tech) and sign in
2. Click **"Create Project"**
3. Configure your project:
   - **Name**: `snippets-app`
   - **Region**: Choose closest to your users
   - **PostgreSQL Version**: 16 (latest)
4. After creation, copy **both** connection strings:
   - **Pooled connection** (ends with `?pgbouncer=true`)
   - **Direct connection** (without pgbouncer)

### 2️⃣ Update Local Environment

1. Open your `.env` file
2. Replace the content with your Neon URLs:

```env
DATABASE_URL="your-pooled-connection-string-here"
DIRECT_URL="your-direct-connection-string-here"
```

### 3️⃣ Push Schema to Neon

Run these commands in your terminal:

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to Neon database
npx prisma db push

# Verify connection (optional)
npx prisma studio
```

### 4️⃣ Push to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 5️⃣ Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `prisma generate && next build` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)

5. **Add Environment Variables** (CRITICAL):
   - Click **"Environment Variables"**
   - Add these variables:
     ```
     DATABASE_URL = your-pooled-connection-string
     DIRECT_URL = your-direct-connection-string
     ```
   - Make sure to add them for **Production**, **Preview**, and **Development**

6. Click **"Deploy"**

### 6️⃣ Verify Deployment

1. Wait for deployment to complete (~2-3 minutes)
2. Click on the deployment URL
3. Your app should be live! 🎉

## Troubleshooting

### Build Fails with Prisma Error
- Make sure you added both `DATABASE_URL` and `DIRECT_URL` to Vercel
- Verify the connection strings are correct (no extra spaces)

### Database Connection Error
- Check if your Neon database is active
- Verify the connection strings include `?sslmode=require`

### App Loads but No Data
- Run `npx prisma studio` locally to add some snippets
- The database is shared between local and production

## Post-Deployment

### Add Custom Domain (Optional)
1. Go to your Vercel project settings
2. Click **"Domains"**
3. Add your custom domain

### Monitor Your App
- Vercel Dashboard: Analytics, Logs, Performance
- Neon Dashboard: Database metrics, Query performance

## Environment Variables Reference

```env
# Pooled connection - Used by Prisma in serverless (Vercel)
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require&pgbouncer=true"

# Direct connection - Used for migrations and Prisma Studio
DIRECT_URL="postgresql://user:pass@host/db?sslmode=require"
```

## Useful Commands

```bash
# Local development
npm run dev

# Build locally (test before deploying)
npm run build

# View database in browser
npx prisma studio

# Reset database (CAUTION: Deletes all data)
npx prisma db push --force-reset
```

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Happy Deploying! 🚀**
