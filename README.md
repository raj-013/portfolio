# Raj Patel — Portfolio

A modern, animated personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deploy to GitHub Pages

### Option 1: Using gh-pages (Recommended)

1. Create a new GitHub repository (e.g., `rajpatel-portfolio` or `<username>.github.io`)
2. Initialize git and push:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

3. Deploy to GitHub Pages:

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

4. In your GitHub repo settings:
   - Go to **Settings** → **Pages**
   - Set source to **Deploy from a branch**
   - Set branch to **gh-pages** and folder to **/ (root)**
   - Click **Save**

Your site will be live at `https://<your-username>.github.io/<repo-name>/`

### Option 2: For `<username>.github.io` Repository

If deploying to `<username>.github.io`, update `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/',  // Change from './' to '/'
})
```

Then follow the same deploy steps above.

## ✏️ Customization

### Adding LinkedIn & GitHub URLs

The resume PDFs only contained the text "LinkedIn" and "GitHub" without actual URLs. Update these in:

- **`src/components/Contact.tsx`** — Update the `href="#"` values for LinkedIn and GitHub icons
- **`src/data/resume.ts`** — Add `linkedinUrl` and `githubUrl` fields

### Updating Resume Data

All portfolio content is sourced from `src/data/resume.ts`. Edit this file to update any information.

### Design Tokens

The design system is defined in `tailwind.config.js`:
- **Colors**: `primary` (indigo) and `surface` (slate) palettes
- **Typography**: Inter (sans) + JetBrains Mono (mono)
- **Animations**: Custom keyframes for gradient, float, and pulse effects

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **React Icons** — Icon library

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimatedSection.tsx   # Reusable scroll-reveal wrapper
│   │   ├── Navbar.tsx            # Fixed navigation with mobile menu
│   │   ├── Hero.tsx              # Landing section with role animation
│   │   ├── About.tsx             # About section with focus cards
│   │   ├── Experience.tsx        # Timeline-style work history
│   │   ├── Projects.tsx          # Project cards with tech tags
│   │   ├── Skills.tsx            # Categorized skill badges
│   │   ├── Education.tsx         # Education cards with coursework
│   │   ├── Contact.tsx           # Contact info and social links
│   │   └── Footer.tsx            # Simple footer
│   ├── data/
│   │   └── resume.ts             # All portfolio data (single source of truth)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Tailwind + custom utilities
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## ⚠️ Missing Information from PDFs

The following could not be extracted from the resume PDFs:

| Field | Status |
|-------|--------|
| LinkedIn URL | Only "LinkedIn" text found — no URL |
| GitHub URL | Only "GitHub" text found — no URL |
| Profile photo | Not available |
| Personal summary | Synthesized from resume content |
| Project GitHub repos | Not available |

## 📄 License

MIT
