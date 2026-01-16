# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth scrolling animations, interactive components, and a clean, professional design.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all screen sizes and devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Scrolling** - Powered by Locomotive Scroll for enhanced user experience
- 🎬 **Animations** - GSAP animations for engaging interactions
- 🎯 **Type-Safe** - Built with TypeScript for better code quality and maintainability
- 🚀 **React Compiler** - Optimized with React Compiler for better performance

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Animations**: GSAP
- **Smooth Scrolling**: Locomotive Scroll
- **Icons**: Phosphor Icons

## 📁 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About/       # About section
│   │   ├── Contact/     # Contact section
│   │   ├── Footer/      # Footer component
│   │   ├── Hero/        # Hero section
│   │   ├── Layout/      # Layout wrapper
│   │   ├── Navbar/      # Navigation bar
│   │   ├── Preloader/   # Loading screen
│   │   ├── Projects/    # Projects showcase
│   │   └── UI/          # Reusable UI components
│   ├── context/         # React context providers
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can preview the production build using:

```bash
npm run preview
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Style it using CSS Modules

### Modifying Styles

- Global styles: Edit `src/styles/global.css` and `src/styles/variables.css`
- Component styles: Edit the corresponding `.module.css` file in each component directory

### Updating Content

Edit the respective component files in `src/components/` to update your portfolio content.

## 📝 License

This project is private and personal.

## 👤 Author

Subas Panta
---

Built with ❤️ using React, TypeScript, and Vite
