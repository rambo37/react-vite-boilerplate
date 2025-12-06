# React + Vite + TypeScript Boilerplate

A modern, production-ready boilerplate for building React applications with Vite, TypeScript, and a comprehensive development tooling setup.

## 🚀 Features

### Core Stack
- **React 19** - Latest React with modern features
- **Vite 7** - Fast build tool and dev server
- **TypeScript 5.9** - Type-safe development
- **React Compiler** - Enabled for optimized React code

### Development Tools
- **ESLint 9** - Code linting with flat config
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

### Testing
- **Vitest** - Fast unit testing framework
- **@testing-library/react** - React component testing
- **@testing-library/user-event** - User interaction testing
- **@testing-library/jest-dom** - Custom DOM matchers
- **Playwright** - End-to-end testing
- **Coverage** - Code coverage with v8 provider

### Code Quality
- Pre-commit hooks that run ESLint on staged files
- TypeScript strict mode enabled
- ESLint + Prettier integration
- Path aliases configured (`@/` for `src/`)

## 📦 What's Included

- ✅ React 19 with TypeScript
- ✅ Vite 7 for fast development and builds
- ✅ React Compiler enabled
- ✅ ESLint 9 with flat config
- ✅ Prettier for code formatting
- ✅ Husky pre-commit hooks
- ✅ Vitest for unit testing
- ✅ Playwright for E2E testing
- ✅ Code coverage setup
- ✅ Path aliases (`@/` → `src/`)
- ✅ TypeScript strict mode
- ✅ Modern ESLint rules for React

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm

### Installation

1. Clone or use this boilerplate:
```bash
git clone <your-repo-url>
cd react-vite-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Set up Husky (Git hooks):
```bash
npm run prepare
```

This initializes Husky and sets up the pre-commit hooks that will run ESLint and type-checking on staged files.

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Testing
- `npm run test` - Run unit tests in watch mode
- `npm run test:ui` - Run tests with Vitest UI
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run Playwright E2E tests

## 🧪 Testing Setup

### Unit Tests (Vitest)
- Tests are located in `src/**/*.test.tsx` or `src/**/*.spec.tsx`
- Uses `@testing-library/react` for component testing
- Uses `@testing-library/user-event` for user interactions
- Coverage reports generated in `coverage/` directory

### E2E Tests (Playwright)
- Tests are located in `e2e/tests/`
- Automatically starts dev server if not running
- Supports multiple browsers (Chromium, Firefox, WebKit)
- Test reports generated in `playwright-report/`

## 📁 Project Structure

```
react-vite-boilerplate/
├── e2e/
│   └── tests/          # Playwright E2E tests
├── public/             # Static assets
├── src/
│   ├── assets/        # Images and other assets
│   ├── App.tsx        # Main App component
│   ├── App.test.tsx   # App component tests
│   ├── main.tsx       # Application entry point
│   └── ...
├── tests/
│   └── setup.ts       # Test setup file
├── .husky/            # Git hooks
├── eslint.config.js   # ESLint configuration
├── playwright.config.ts # Playwright configuration
├── vitest.config.ts   # Vitest configuration
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Adding Tailwind CSS

This boilerplate uses plain CSS by default. To add Tailwind CSS:

### 1. Install Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2. Initialize Tailwind

```bash
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js` files.

### 3. Configure Tailwind

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Add Tailwind Directives

Replace the content of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Optional: Update Prettier Ignore

Add to `.prettierignore` if needed:

```
tailwind.config.js
postcss.config.js
```

### 6. Start Using Tailwind

You can now use Tailwind utility classes in your components:

```tsx
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  );
}
```

**Note:** You can keep existing CSS files and mix Tailwind with custom CSS as needed.

## 🔧 Configuration

### ESLint
- Flat config format (ESLint 9)
- React, TypeScript, and Prettier integration
- Pre-commit hooks run ESLint on staged files

### Prettier
- Configured in `.prettierrc`
- Integrated with ESLint via `eslint-plugin-prettier`

### TypeScript
- Strict mode enabled
- Path aliases: `@/` maps to `src/`
- Separate configs for app and node files

### Git Hooks
- Pre-commit: Runs ESLint on staged files and TypeScript type-checking
- Configured via Husky and lint-staged
- **Important**: Run `npm run prepare` after `npm install` to set up Husky hooks

## 📝 Notes

- **React Compiler**: Enabled by default. See [React Compiler docs](https://react.dev/learn/react-compiler) for more information.
- **CSS**: Plain CSS is used by default. Tailwind CSS can be added following the instructions above.
- **Path Aliases**: Use `@/` to import from `src/` directory (e.g., `import App from '@/App'`)

## 🤝 Contributing

This is a boilerplate template. Feel free to customize it for your needs!

## 📄 License

MIT
