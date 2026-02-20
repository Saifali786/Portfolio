# Personal Portfolio

A React + Vite portfolio site with a custom retro-futurist visual system, responsive mobile navigation, dark/light theme toggle, and animated section reveals.

## Stack

- React 18 (JSX)
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React + React Icons
- Fontsource (`Oxanium`, `Assistant`, `Azeret Mono`)

## Features

- Distinct custom typography and color-token based theming
- Dark and light themes (persisted with `localStorage`)
- Responsive layout for desktop/tablet/mobile
- Mobile hamburger navigation with viewport-safe scrolling
- Resume link available in desktop nav and mobile top controls
- Animated hero and section transitions with Framer Motion
- Experience section with desktop tabs and mobile horizontal tabs

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

App runs on: [http://localhost:8080](http://localhost:8080)

## Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Create production build in dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Build & Deploy

Create production build:

```bash
npm run build
```

Deploy the generated `dist/` folder (Netlify, Vercel, etc.).

### Netlify Notes

- Build command: `npm run build`
- Publish directory: `dist`
- Resume file should stay in `public/Prasla_Saifali_Resume.pdf`
- Resume link is already configured using `import.meta.env.BASE_URL` for correct path handling in production

## Project Structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    SectionHeading.jsx
    Skills.jsx
  App.jsx
  index.css
  main.jsx
public/
  Prasla_Saifali_Resume.pdf
  favicon.ico
```

## Customization

- Update content directly in `src/components/*.jsx`
- Adjust theme tokens and global styles in `src/index.css`
- Update fonts in `src/main.jsx` and `tailwind.config.js`
- Replace resume by overwriting `public/Prasla_Saifali_Resume.pdf`
