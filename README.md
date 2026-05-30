# Personal Portfolio — Next.js

Bold & modern personal portfolio with Hero, About, Travel, and Contact sections.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts
- **Hosting**: Netlify

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
```

---

## Customise It

### Personal info
Edit these files to add your real content:

| File | What to change |
|------|---------------|
| `src/components/Hero.tsx` | Your name, tagline |
| `src/components/About.tsx` | Bio, skills, stats |
| `src/components/Travel.tsx` | Your travel destinations & stories |
| `src/components/Contact.tsx` | Your email, GitHub link |
| `src/app/layout.tsx` | Page title & meta description |

### Colors
All design tokens are in `src/app/globals.css`:
```css
--accent: #e8c547;   /* yellow — change to any color you like */
--bg: #0a0a0a;        /* page background */
```

### Contact form
The form currently logs to console. Connect it to a real backend:
- **Formspree** (easiest): sign up at formspree.io, replace the `handleSubmit` in `Contact.tsx`
- **Resend**: add an API route at `src/app/api/contact/route.ts`

---

## Deploy to Netlify

1. Push this folder to your GitHub repo (`https://github.com/mvarun913-bit/mywebsite`)
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Add a `netlify.toml` (already included below) and deploy!

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## Project Structure
```
src/
├── app/
│   ├── globals.css       ← design tokens & resets
│   ├── layout.tsx        ← root layout & metadata
│   └── page.tsx          ← main page
└── components/
    ├── Navbar.tsx / .module.css
    ├── Hero.tsx / .module.css
    ├── About.tsx / .module.css
    ├── Travel.tsx / .module.css
    └── Contact.tsx / .module.css
```
