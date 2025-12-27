# 📋 Quick Deployment Checklist

## ✅ Pre-Deployment Checklist

- [ ] Neon PostgreSQL database created
- [ ] Connection strings copied (DATABASE_URL & DIRECT_URL)
- [ ] Local `.env` file updated with Neon URLs
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma db push`
- [ ] Test locally with `npm run dev`
- [ ] Code pushed to GitHub

## 🚀 Vercel Deployment Steps

1. **Go to Vercel**: https://vercel.com
2. **Import Repository**: Click "Add New Project"
3. **Add Environment Variables**:
   ```
   DATABASE_URL = <your-pooled-connection>
   DIRECT_URL = <your-direct-connection>
   ```
4. **Deploy**: Click "Deploy" button
5. **Wait**: ~2-3 minutes for build
6. **Visit**: Click on deployment URL

## 🔧 Commands to Run Locally

```bash
# 1. Generate Prisma Client
npx prisma generate

# 2. Push schema to database
npx prisma db push

# 3. Test locally
npm run dev

# 4. (Optional) Open Prisma Studio
npx prisma studio
```

## 📝 Environment Variables Format

```env
DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require&pgbouncer=true"
DIRECT_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
```

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Check environment variables in Vercel |
| Database error | Verify connection strings are correct |
| No data showing | Add data via Prisma Studio locally |
| Port already in use | Kill process or use different port |

## 📚 Helpful Links

- **Neon Dashboard**: https://console.neon.tech
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Full Guide**: See `DEPLOYMENT.md`

---

**Need detailed instructions?** → Read `DEPLOYMENT.md`
