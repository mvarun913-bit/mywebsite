# Varun Munigala Portfolio

## Project Overview
Personal portfolio website built with Next.js 14, TypeScript, and CSS Modules.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: CSS Modules
- Fonts: Syne (display) + DM Sans (body)
- Hosting: Netlify
- Domain: varunmunigala.com

## Design System
- Background: #f5f0e8 (cream)
- Card background: #ede8df
- Border: #e0d9ce
- Text primary: #1a1612
- Text muted: #8a7e72
- Accent: #c4571a (terracotta)

## Project Structure
src/
├── app/
│   ├── globals.css        ← design tokens and resets
│   ├── layout.tsx         ← root layout and metadata
│   ├── page.tsx           ← main homepage
│   └── travel/
│       ├── page.tsx       ← travel blog page
│       └── travel.module.css
└── components/
    ├── Navbar.tsx          ← fixed transparent navbar
    ├── Hero.tsx            ← full screen hero section
    ├── About.tsx           ← bio, skills, stats
    ├── Travel.tsx          ← travel destination cards
    ├── Contact.tsx         ← contact form
    └── SocialSidebar.tsx   ← floating Instagram, LinkedIn, GitHub

## Pages
- / → Homepage (Hero, About, Travel, Contact)
- /travel → Travel blog with pagination

## To Do
- Add real photos to travel cards
- Connect contact form to email (Formspree)
- Fill in real bio and social media handles
- Fine-tune navbar opacity on scroll
