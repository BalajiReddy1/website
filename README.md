# Arkayen Labs

A modern portfolio website showcasing Arkayen Labs' mobile applications.

## Features

- **Responsive & Accessible** - Mobile-first design with full keyboard navigation support
- **Modern Tech Stack** - Built with React, TypeScript, and Tailwind CSS
- **Performance Optimized** - Fast loading with Vite and optimized builds
- **Rich Animations** - Smooth transitions and interactive elements

## Technology Stack

- **React** 18.3.1 - UI library
- **TypeScript** 5.8.3 - Type-safe development
- **Vite** 5.4.19 - Build tool and dev server
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **shadcn-ui** - Accessible component library
- **Framer Motion** 12.27.1 - Smooth animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd arkayen-labs

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   └── ui/         # shadcn-ui components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── assets/         # Images and static files
│   └── App.tsx         # Main app component
├── public/             # Public static files
└── index.html          # HTML template
```

## Customization

### Styling

The design system uses CSS custom properties defined in `src/index.css`. You can customize colors, spacing, and other design tokens there.

### Components

All UI components are built with shadcn-ui and can be customized via `components.json`.

## Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

Copyright © 2026 Arkayen Labs. All rights reserved.

## Contact

For inquiries about our apps or services, visit the contact section on our website.
