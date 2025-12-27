# 📝 CodeSnippets - Your Personal Code Library

A modern, feature-rich code snippet manager built with Next.js 15, Prisma, and TailwindCSS. Store, organize, and access your code snippets from anywhere with a beautiful, responsive interface.

![CodeSnippets Banner](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### Core Functionality
- 🎨 **Beautiful UI/UX** - Modern, responsive design with smooth animations
- 🌓 **Dark/Light Mode** - Automatic theme detection with manual toggle
- 🔍 **Advanced Search** - Search snippets by title, tags, or description
- 🏷️ **Tag System** - Organize snippets with custom tags
- ⭐ **Favorites** - Mark important snippets for quick access
- 💻 **Multi-Language Support** - 17+ programming languages with syntax highlighting
- 📝 **Monaco Editor** - Professional code editing experience
- 📱 **Fully Responsive** - Works seamlessly on all devices

### Advanced Features
- 🎯 **Smart Filtering** - Filter by language, favorites, and more
- 📊 **Snippet Statistics** - Track creation dates and metadata
- 🎨 **Language Badges** - Visual indicators for each programming language
- 🔔 **Toast Notifications** - Real-time feedback for all actions
- ⚡ **Server Actions** - Fast, optimized data mutations
- 🎭 **Glassmorphism Design** - Modern, premium aesthetic
- 🔒 **Type-Safe** - Full TypeScript support throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Neon PostgreSQL account (free tier available at [neon.tech](https://neon.tech))

### Quick Start

#### Option 1: Using the Setup Script (Windows)
```bash
# Clone the repository
git clone <your-repo-url>
cd snippets

# Run the automated setup
setup.bat
```

#### Option 2: Manual Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd snippets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Neon PostgreSQL Database**
   - Go to [neon.tech](https://neon.tech) and create a free account
   - Create a new project
   - Copy both connection strings (Pooled and Direct)

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Neon connection strings:
   ```env
   DATABASE_URL="postgresql://user:pass@host/db?sslmode=require&pgbouncer=true"
   DIRECT_URL="postgresql://user:pass@host/db?sslmode=require"
   ```

5. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Creating a Snippet
1. Click the **"+ New Snippet"** button in the header
2. Fill in the title, select a language, and paste your code
3. Optionally add a description and tags
4. Click **"Create Snippet"** to save

### Searching and Filtering
- Use the search bar to find snippets by title or tags
- Click **"Filters"** to filter by programming language
- Toggle **"Favorites"** to show only starred snippets

### Editing a Snippet
1. Click on any snippet card to view details
2. Click **"Edit"** to open the Monaco editor
3. Make your changes and click **"Save Changes"**

### Managing Snippets
- Click the ⭐ icon to add/remove from favorites
- Use the **"Delete"** button to remove snippets
- Snippets are automatically timestamped

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [Prisma](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/) (Neon)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Code Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Date Formatting:** [date-fns](https://date-fns.org/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Project Structure

```
snippets/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── src/
│   ├── actions/
│   │   └── index.ts          # Server actions
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   └── snippet/          # Snippet routes
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── SnippetCard.tsx   # Snippet card component
│   │   ├── SnippetList.tsx   # Snippet list with filters
│   │   ├── SearchFilter.tsx  # Search and filter UI
│   │   ├── EditSnippetForm.tsx # Code editor form
│   │   ├── ThemeProvider.tsx # Dark mode provider
│   │   ├── ToastProvider.tsx # Toast notifications
│   │   └── ui/               # UI components
│   └── lib/
│       ├── prisma.ts         # Prisma client
│       └── utils.ts          # Utility functions
├── .env.example              # Environment variables template
├── DEPLOYMENT.md             # Deployment guide
├── TROUBLESHOOTING.md        # Common issues and solutions
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Supported Languages

JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust, PHP, Ruby, Swift, Kotlin, HTML, CSS, SQL, Bash, and more!

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

This project is optimized for deployment on Vercel with Neon PostgreSQL.

**Quick Deploy:**

1. **Set up Neon Database**
   - Create account at [neon.tech](https://neon.tech)
   - Create a new project
   - Copy connection strings

2. **Deploy to Vercel**
   - Push code to GitHub
   - Import repository on [Vercel](https://vercel.com)
   - Add environment variables:
     - `DATABASE_URL` (pooled connection)
     - `DIRECT_URL` (direct connection)
   - Deploy!

**Detailed Instructions:**
See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step deployment guide.

**Troubleshooting:**
See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues and solutions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Database powered by [Prisma](https://www.prisma.io/)
- Code editing by [Monaco Editor](https://microsoft.github.io/monaco-editor/)

---

**Made with ❤️ by developers, for developers**

⭐ Star this repo if you find it helpful!
