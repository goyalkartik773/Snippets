@echo off
echo ========================================
echo CodeSnippets - Setup Script
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)
echo.

echo Step 2: Resetting database...
call npx prisma migrate reset --force
if %errorlevel% neq 0 (
    echo Error: Failed to reset database
    pause
    exit /b 1
)
echo.

echo Step 3: Generating Prisma Client...
call npx prisma generate
if %errorlevel% neq 0 (
    echo Error: Failed to generate Prisma client
    pause
    exit /b 1
)
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo You can now run: npm run dev
echo.
pause
