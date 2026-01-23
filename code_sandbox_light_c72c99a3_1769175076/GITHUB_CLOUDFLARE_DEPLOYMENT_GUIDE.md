# 🚀 GitHub + Cloudflare Pages Deployment Guide

## Step-by-Step: Get Your Site Live with Images Working

---

## **PART 1: Download Project Files**

### Files You Need to Download:

**Essential Website Files:**
```
bold-booth-website/
├── index.html
├── css/
│   ├── style.css
│   └── game-screenshots.css
├── js/
│   └── script.js
└── images/
    ├── logo.png
    ├── booth-interface.png
    ├── guest-journey-video.mp4
    ├── scoreboard-display.png
    ├── game-welcome-screen.png
    ├── game-play-for-points.png
    ├── game-quick-message.png
    ├── game-most-likely-to.png
    ├── game-finish-the-sentence.png
    ├── game-end-of-night.png
    ├── game-end-of-night-continued.png
    ├── game-emoji-translator.png
    ├── wooden-usb-package.jpg
    ├── emoji-puzzles-1.png
    ├── emoji-puzzles-2.png
    └── emoji-puzzles-3.png
```

**Optional (but recommended):**
- `README.md` (project documentation)
- `.gitignore` (tells Git to skip documentation files)

**Skip these files** (they're just documentation):
- All other `.md` files (CONTACT_INTEGRATION.md, ENHANCEMENT_SUMMARY.md, etc.)

---

## **PART 2: Create GitHub Repository**

### Option A: Using GitHub Website (Easier)

1. **Go to GitHub.com** and log in
2. **Click the "+" icon** (top-right) → "New repository"
3. **Repository name:** `bold-booth-website` (or your choice)
4. **Description:** "Bold Booth - Wedding Entertainment Website"
5. **Visibility:** 
   - ✅ **Public** (if you want it visible)
   - ✅ **Private** (if you want it hidden) - both work with Cloudflare
6. **DO NOT check:** "Add a README file" (we already have one)
7. **Click:** "Create repository"

### Option B: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop:** https://desktop.github.com/
2. **Install and sign in**
3. **File → New Repository**
4. **Name:** `bold-booth-website`
5. **Local Path:** Choose where to save it
6. **Click:** "Create Repository"

---

## **PART 3: Upload Files to GitHub**

### Using GitHub Website:

1. **On your new repository page, click:** "uploading an existing file"
2. **Drag and drop** these folders/files:
   - `index.html`
   - `css/` folder (entire folder)
   - `js/` folder (entire folder)
   - `images/` folder (entire folder with all 16 files)
   - `README.md` (optional)
3. **Add commit message:** "Initial commit - Bold Booth website"
4. **Click:** "Commit changes"

### Using GitHub Desktop:

1. **Copy your project files** into the local repository folder
2. **GitHub Desktop will show** all the files as changes
3. **Write commit message:** "Initial commit - Bold Booth website"
4. **Click:** "Commit to main"
5. **Click:** "Push origin" (top-right)

---

## **PART 4: Connect Cloudflare Pages to GitHub**

### Steps:

1. **Go to Cloudflare Dashboard:** https://dash.cloudflare.com
2. **Click "Pages"** in left sidebar
3. **Click "Create a project"**
4. **Click "Connect to Git"**

### First Time: Authorize GitHub

If this is your first time:
- Click "Connect GitHub"
- Authorize Cloudflare Pages to access your repositories
- You can give access to all repos or just select ones

### Select Your Repository

5. **Find and select:** `bold-booth-website` (or whatever you named it)
6. **Click "Begin setup"**

### Configure Build Settings

7. **Project name:** `bold-booth` (or your choice - this becomes your URL)
8. **Production branch:** `main` (or `master` if that's what you used)
9. **Build settings:**
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (or leave empty)
   - **Root directory:** (leave empty)

**Why empty?** Because this is a static HTML site - no build process needed!

10. **Click "Save and Deploy"**

---

## **PART 5: Wait for Deployment**

### What Happens:

1. Cloudflare clones your GitHub repository
2. Uploads all files to their CDN
3. Builds and deploys your site
4. Usually takes **1-3 minutes**

### You'll See:

- ✅ "Initializing build environment"
- ✅ "Cloning repository"
- ✅ "Building application" (quick since no build needed)
- ✅ "Deploying to Cloudflare's network"
- ✅ **"Success! Your site is live!"**

### Your Live URL:

You'll get a URL like:
```
https://bold-booth.pages.dev
```
or
```
https://bold-booth-xyz.pages.dev
```

---

## **PART 6: Verify Images Work**

### Test 1: Visit Your Live Site
Open the URL Cloudflare gave you.

### Test 2: Check Direct Image URL
```
https://your-site.pages.dev/images/logo.png
```
**Should:** Display the logo ✅

### Test 3: Check Browser Console
Press F12 → Console tab
**Should:** No red 404 errors ✅

### Test 4: Verify All Images Load
- ✅ Logo in header
- ✅ Booth interface image
- ✅ Guest journey video
- ✅ Scoreboard display
- ✅ All 8 game screenshots
- ✅ Wooden USB package
- ✅ 3 emoji puzzle images
- ✅ "Be Bold" tagline appears

---

## **PART 7: Future Updates (Super Easy!)**

### Whenever you want to update your site:

**Method 1: Edit on GitHub.com**
1. Go to your repository
2. Click the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. **Cloudflare automatically redeploys!** (takes ~1 minute)

**Method 2: Using GitHub Desktop**
1. Edit files on your computer
2. GitHub Desktop shows changes
3. Commit changes
4. Push to GitHub
5. **Cloudflare automatically redeploys!**

**That's it!** Any push to GitHub triggers automatic deployment.

---

## **Bonus: Add Custom Domain (Optional)**

If you own a domain like `boldboothevent.com`:

1. **Cloudflare Pages Dashboard** → Your project → "Custom domains"
2. **Click "Set up a domain"**
3. **Enter your domain**
4. **Follow DNS setup instructions**
5. **Wait for DNS to propagate** (usually 5-60 minutes)
6. **Your site is now on your custom domain!**

---

## **Why GitHub Integration is Better:**

✅ **Automatic deployments** - Push to GitHub = instant deploy  
✅ **Version control** - Track all changes, rollback if needed  
✅ **Reliable uploads** - All files guaranteed to upload correctly  
✅ **No file size issues** - GitHub handles large files better  
✅ **Easy updates** - Edit and push, Cloudflare does the rest  
✅ **Collaboration** - Easy to work with others  
✅ **Free** - GitHub + Cloudflare Pages both free

---

## **Troubleshooting:**

### Issue: Images still don't show after GitHub deployment

**Check:**
1. Did you upload the `images/` folder to GitHub?
2. Go to your GitHub repository and verify all 16 image files are there
3. Check: https://github.com/your-username/bold-booth-website/tree/main/images

### Issue: Video doesn't play

**Options:**
1. **Compress video** from 17.5MB to ~5MB
2. **Use YouTube** embed instead
3. **Use Vimeo** embed instead
4. **Use Cloudflare Stream** for hosting

### Issue: "Build failed" error

**Solution:**
- Make sure build settings are empty
- Framework: None
- Build command: (empty)
- Output directory: `/` or (empty)

---

## **Quick Checklist:**

Before connecting to Cloudflare:

- ✅ GitHub repository created
- ✅ `index.html` uploaded
- ✅ `css/` folder uploaded (with both CSS files)
- ✅ `js/` folder uploaded (with script.js)
- ✅ `images/` folder uploaded (with all 16 files)
- ✅ Repository is public or Cloudflare has access

After deployment:

- ✅ Site is live on `.pages.dev` URL
- ✅ Logo shows in header
- ✅ All images load correctly
- ✅ Video plays (or embedded from YouTube/Vimeo)
- ✅ "Be Bold" tagline visible
- ✅ Mobile menu works
- ✅ All sections display correctly

---

## **Need Help?**

If you get stuck at any step, let me know:
1. Which step you're on
2. What error you're seeing
3. Screenshot if helpful

I'll walk you through it! 🚀

---

**Let's get your Bold Booth website live with all images working!**
