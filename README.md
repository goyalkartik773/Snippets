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

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd snippets_yt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database URL:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Initialize the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
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
- **Database:** [Prisma](https://www.prisma.io/) with SQLite
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Code Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Date Formatting:** [date-fns](https://date-fns.org/)

## 📁 Project Structure

```
snippets_yt/
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

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

For database, consider upgrading to:
- **PostgreSQL** (Neon, Supabase, Railway)
- **MySQL** (PlanetScale)
- **MongoDB** (MongoDB Atlas)

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
