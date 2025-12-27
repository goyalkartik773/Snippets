# 🚀 Quick Start Guide

## Option 1: Automated Setup (Recommended)

Simply run the setup script:
```bash
setup.bat
```

This will:
1. Install all dependencies
2. Reset and migrate the database
3. Generate Prisma client

Then start the development server:
```bash
npm run dev
```

## Option 2: Manual Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Database
```bash
# Reset database (this will delete existing data)
npx prisma migrate reset --force

# Or create a new migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 First Steps

1. **Create Your First Snippet**
   - Click "+ New Snippet" in the header
   - Fill in title, select language, and paste code
   - Add optional description and tags
   - Click "Create Snippet"

2. **Explore Features**
   - Toggle dark/light mode with the theme button
   - Search for snippets using the search bar
   - Filter by language or favorites
   - Click on any snippet to view details

3. **Edit and Manage**
   - Click "Edit" to modify code with Monaco editor
   - Star important snippets with the ⭐ button
   - Copy code with one click
   - Delete snippets you no longer need

## 🐛 Troubleshooting

### Build Stuck?
If `npm run build` gets stuck:
```bash
# Kill all Node processes
taskkill /F /IM node.exe

# Delete build cache
rmdir /s /q .next

# Try again
npm run build
```

### Database Issues?
```bash
# Reset everything
npx prisma migrate reset --force
npx prisma generate
```

### TypeScript Errors?
Make sure Prisma client is generated:
```bash
npx prisma generate
```

## 📚 Learn More

- Check `README.md` for full documentation
- See `ENHANCEMENTS.md` for list of all features
- Visit [Next.js Docs](https://nextjs.org/docs)
- Visit [Prisma Docs](https://www.prisma.io/docs)

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.ts` and `src/app/globals.css`

### Add More Languages
Update the `LANGUAGES` array in:
- `src/app/snippet/new/page.tsx`
- `src/components/EditSnippetForm.tsx`
- `src/components/SnippetCard.tsx`

### Modify Database Schema
1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name your_change_name`
3. Run `npx prisma generate`

---

**Happy Coding! 🎉**
