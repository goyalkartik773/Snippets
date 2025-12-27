# 🔧 Quick Command Reference

## ⚠️ IMPORTANT: Run all commands from the project root directory!

Your project root is: `C:\Snippets\snippets`

Before running any command, make sure you're in the correct directory:

```bash
cd C:\Snippets\snippets
```

---

## 📋 Step-by-Step Commands

### 1️⃣ Navigate to Project Directory
```bash
cd C:\Snippets\snippets
```

### 2️⃣ Generate Prisma Client
```bash
npx prisma generate
```

### 3️⃣ Push Schema to Database
```bash
npx prisma db push
```

### 4️⃣ Open Prisma Studio (Optional - to view/edit data)
```bash
npx prisma studio
```

### 5️⃣ Build the Application
```bash
npm run build
```

### 6️⃣ Test Production Mode Locally
```bash
npm start
```

---

## 🐛 Troubleshooting

### Error: "Could not find Prisma Schema"
**Solution**: Make sure you're in the project root directory (`C:\Snippets\snippets`)

```bash
# Check current directory
cd

# Navigate to project root
cd C:\Snippets\snippets

# Then run your command
npx prisma generate
```

### Error: "Port already in use"
**Solution**: Kill the existing process or use a different port

```bash
# The dev server will automatically try the next available port
npm run dev
```

### Error: "Database connection failed"
**Solution**: Check your `.env` file has the correct Neon connection strings

---

## 🚀 Deployment Commands

### Commit and Push to GitHub
```bash
git add .
git commit -m "Configure for PostgreSQL and Vercel deployment"
git push
```

### If you haven't initialized git yet:
```bash
git init
git add .
git commit -m "Initial commit - Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## 📁 Project Structure

```
C:\Snippets\snippets\          ← YOU SHOULD BE HERE
├── prisma\
│   └── schema.prisma          ← Prisma schema file
├── src\
│   ├── app\
│   ├── components\
│   ├── actions\
│   └── lib\
│       └── prisma.ts
├── .env                       ← Your environment variables
├── .env.example
├── package.json
├── vercel.json
└── DEPLOYMENT.md
```

---

## ✅ Quick Verification

Run this to verify you're in the correct directory:

```bash
# This should show your project files
dir

# You should see: package.json, prisma folder, src folder, etc.
```

---

## 🆘 Still Having Issues?

1. **Close all terminals**
2. **Open a NEW terminal**
3. **Navigate to project root**: `cd C:\Snippets\snippets`
4. **Verify location**: `dir` (should see package.json)
5. **Try the command again**: `npx prisma generate`

---

**Remember**: Always run commands from `C:\Snippets\snippets` directory! 🎯
