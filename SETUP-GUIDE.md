# How to Build & Deploy a Personal Portfolio Website
### A Step-by-Step Guide for Beginners

---

## What You'll Need
- A computer (Mac or Windows)
- A GitHub account
- A Netlify account
- A GoDaddy account (for custom domain)
- Claude Pro subscription

---

## Step 1 — Get Claude Pro

1. Go to 👉 [https://claude.ai](https://claude.ai)
2. Click **Sign Up** and create an account
3. Upgrade to **Claude Pro** for best results
4. Use Claude to help you design, write code, and fix errors throughout this guide

---

## Step 2 — Install VS Code

1. Go to 👉 [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click **Download for Mac** (or Windows)
3. Open the downloaded file and drag VS Code to your Applications folder
4. Open VS Code
5. Optionally install the **Claude Code extension** inside VS Code for AI assistance directly in your editor

---

## Step 3 — Install Node.js

1. Go to 👉 [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (left button)
3. Open the installer and follow the steps
4. Verify installation by opening Terminal and running:
```bash
node -v
npm -v
```
You should see version numbers for both.

---

## Step 4 — Create a GitHub Account & Repository

1. Go to 👉 [https://github.com](https://github.com) and sign up
2. Click the **+** icon → **New repository**
3. Name it `mywebsite` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**
6. Copy the repository URL (e.g. `https://github.com/yourusername/mywebsite.git`)

---

## Step 5 — Get Your Code from Claude

1. Open Claude at 👉 [https://claude.ai](https://claude.ai)
2. Tell Claude what kind of website you want, for example:
   > "Build me a personal portfolio website with Next.js. I want a Hero section, About section, Travel posts, and Contact form. Bold and modern style with a cream background and terracotta accent color."
3. Claude will generate all your code files
4. Download the zip file Claude provides

---

## Step 6 — Set Up the Project on Your Mac

Open Terminal and run these commands one by one:

```bash
# Go to your Downloads folder
cd ~/Downloads

# Unzip the project
unzip portfolio.zip

# Go into the project folder
cd portfolio

# Install dependencies
npm install

# Run the project locally
npm run dev
```

Open your browser and go to 👉 [http://localhost:3000](http://localhost:3000)

You should see your website running locally!

---

## Step 7 — Customise Your Website

Open the project in VS Code:
```bash
code ~/Downloads/portfolio
```

Edit these files to add your real content:

| File | What to change |
|------|---------------|
| `src/components/Hero.tsx` | Your name and tagline |
| `src/components/About.tsx` | Your bio, skills, stats |
| `src/components/Travel.tsx` | Your travel destinations |
| `src/components/Contact.tsx` | Your email and social links |
| `src/app/globals.css` | Colors and fonts |

Save files with **Cmd+S** and your browser will update instantly.

---

## Step 8 — Push Code to GitHub

First, create a Personal Access Token on GitHub:
1. Go to 👉 [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)
2. Give it a name (e.g. `portfolio`)
3. Set expiration to **90 days**
4. Check the **repo** checkbox
5. Click **Generate token** and copy it

Then run these commands in Terminal:

```bash
cd ~/Downloads/portfolio

# Create .gitignore to exclude node_modules
echo "node_modules
.next
.env
" > .gitignore

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio"

# Connect to GitHub (replace YOUR_TOKEN and YOUR_USERNAME)
git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/mywebsite.git

# Push to GitHub
git push -u origin main
```

---

## Step 9 — Create a Netlify Account & Deploy

1. Go to 👉 [https://netlify.com](https://netlify.com)
2. Sign up with your **GitHub account**
3. Click **Add new site** → **Import from Git** → **GitHub**
4. Select your `mywebsite` repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **Deploy site**

Wait 2 minutes — your site will be live at a URL like `yourname.netlify.app` 🎉

---

## Step 10 — Connect Your Custom Domain (GoDaddy)

### On Netlify:
1. Go to your site dashboard → **Domain management**
2. Click **Add a domain** → type your domain name → **Verify**
3. Copy the **4 nameservers** Netlify gives you (e.g. `dns1.p02.nsone.net`)

### On GoDaddy:
1. Go to 👉 [https://dcc.godaddy.com/manage/dns](https://dcc.godaddy.com/manage/dns)
2. Select your domain
3. Find **Nameservers** → Click **Change** → **Enter my own nameservers**
4. Paste all 4 Netlify nameservers
5. Click **Save**

Wait **1-24 hours** for DNS to propagate. Then your site will be live at your custom domain! 🌍

---

## Step 11 — Update Your Site in the Future

Every time you make changes and want them live:

```bash
cd ~/Downloads/portfolio
git add .
git commit -m "Describe your changes here"
git push
```

Netlify will automatically detect the push and redeploy your site within 2 minutes.

---

## Troubleshooting Common Errors

| Error | Fix |
|-------|-----|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Module not found` | Check import paths in your .tsx files |
| `node_modules too large for GitHub` | Add `node_modules` to `.gitignore` |
| `Authentication failed` for git push | Use a Personal Access Token, not your password |
| Site not showing on custom domain | Wait for DNS propagation (up to 24 hours) |

---

## Tech Stack Used

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework |
| TypeScript | Type-safe JavaScript |
| CSS Modules | Component styling |
| GitHub | Code hosting |
| Netlify | Website hosting & deployment |
| GoDaddy | Domain registration |
| Claude Pro | AI coding assistant |

---

*Built with ❤️ using Claude Pro · varunmunigala.com*
