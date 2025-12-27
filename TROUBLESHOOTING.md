# 🐛 Troubleshooting Common Errors

## Error: EPERM - Operation Not Permitted

### Full Error Message:
```
EPERM: operation not permitted, rename 'C:\Snippets\snippets\node_modules\.prisma\client\query_engine-windows.dll.node.tmp...' -> '...'
```

### Cause:
The Prisma query engine file is locked because a process is using it (usually a running dev server).

### Solution:

#### Option 1: Close All Processes (Recommended)
1. **Stop dev server**: Press `Ctrl+C` in any terminal running `npm run dev`
2. **Close VS Code** or your code editor
3. **Wait 5-10 seconds**
4. **Reopen VS Code**
5. **Try the command again**

#### Option 2: Force Kill Node Processes
```bash
# Kill all Node.js processes
taskkill /F /IM node.exe

# Wait a few seconds
timeout /t 5

# Try again
npx prisma generate
```

#### Option 3: Restart Your Computer
If the above doesn't work, a simple restart will clear all locked files.

---

## Error: Could Not Find Prisma Schema

### Full Error Message:
```
Error: Could not find Prisma Schema that is required for this command.
```

### Cause:
You're running the command from the wrong directory.

### Solution:
```bash
# Navigate to project root
cd C:\Snippets\snippets

# Verify you're in the right place (should see package.json)
dir

# Now run your command
npx prisma generate
```

---

## Error: Database Connection Failed

### Possible Error Messages:
- `Can't reach database server`
- `Connection timeout`
- `Authentication failed`

### Solutions:

#### 1. Check Your .env File
Make sure you have both connection strings:
```env
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require&pgbouncer=true"
DIRECT_URL="postgresql://user:pass@host/db?sslmode=require"
```

#### 2. Verify Neon Database is Active
1. Go to https://console.neon.tech
2. Check if your project is active
3. Copy fresh connection strings if needed

#### 3. Check for Typos
- No extra spaces in connection strings
- Correct password (passwords are case-sensitive)
- Correct database name

---

## Error: Port Already in Use

### Full Error Message:
```
Port 3000 is already in use
```

### Solution:
Next.js will automatically try the next port (3001, 3002, etc.). Just use the new port shown in the terminal.

Or kill the process using the port:
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /F /PID <PID>
```

---

## Error: Module Not Found

### Full Error Message:
```
Error: Cannot find module '@prisma/client'
```

### Solution:
```bash
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate
```

---

## Build Errors on Vercel

### Common Issues:

#### 1. Missing Environment Variables
**Solution**: Add `DATABASE_URL` and `DIRECT_URL` in Vercel project settings

#### 2. Prisma Client Not Generated
**Solution**: Already fixed! We added `postinstall` script to package.json

#### 3. Database Connection Timeout
**Solution**: Make sure your Neon database allows connections from Vercel's IP ranges (it should by default)

---

## General Troubleshooting Steps

### 1. Clean Install
```bash
# Delete node_modules and lock file
rmdir /s /q node_modules
del package-lock.json

# Reinstall
npm install

# Generate Prisma Client
npx prisma generate
```

### 2. Clear Next.js Cache
```bash
# Delete .next folder
rmdir /s /q .next

# Rebuild
npm run build
```

### 3. Reset Database (CAUTION: Deletes all data!)
```bash
npx prisma db push --force-reset
```

---

## 🆘 Still Stuck?

### Checklist:
- [ ] Are you in the project root directory? (`cd C:\Snippets\snippets`)
- [ ] Did you close all running dev servers?
- [ ] Is your `.env` file configured correctly?
- [ ] Did you run `npx prisma generate`?
- [ ] Did you run `npx prisma db push`?
- [ ] Are your Neon database credentials correct?

### Get Help:
1. Check `COMMANDS.md` for correct command syntax
2. Check `DEPLOYMENT.md` for deployment steps
3. Verify your setup with `verify-deployment.bat`

---

**Remember**: Most errors are caused by:
1. Running commands from wrong directory
2. Locked files from running processes
3. Missing or incorrect environment variables

Always start by checking these three things! 🎯
