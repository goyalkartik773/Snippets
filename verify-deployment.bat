@echo off
echo ========================================
echo   Deployment Verification Script
echo ========================================
echo.

echo [1/5] Checking Prisma Schema...
findstr /C:"postgresql" prisma\schema.prisma >nul
if %errorlevel%==0 (
    echo ✓ Prisma schema configured for PostgreSQL
) else (
    echo ✗ ERROR: Prisma schema not configured for PostgreSQL
    exit /b 1
)
echo.

echo [2/5] Checking package.json...
findstr /C:"postinstall" package.json >nul
if %errorlevel%==0 (
    echo ✓ postinstall script found
) else (
    echo ✗ WARNING: postinstall script missing
)
echo.

echo [3/5] Checking vercel.json...
if exist vercel.json (
    echo ✓ vercel.json exists
) else (
    echo ✗ WARNING: vercel.json not found
)
echo.

echo [4/5] Checking .env file...
if exist .env (
    echo ✓ .env file exists
) else (
    echo ✗ ERROR: .env file not found
    exit /b 1
)
echo.

echo [5/5] Generating Prisma Client...
call npx prisma generate
if %errorlevel%==0 (
    echo ✓ Prisma Client generated successfully
) else (
    echo ✗ ERROR: Failed to generate Prisma Client
    exit /b 1
)
echo.

echo ========================================
echo   ✓ All checks passed!
echo ========================================
echo.
echo Next steps:
echo 1. Run: npx prisma db push
echo 2. Run: npm run build
echo 3. Push to GitHub
echo 4. Deploy on Vercel
echo.
pause
