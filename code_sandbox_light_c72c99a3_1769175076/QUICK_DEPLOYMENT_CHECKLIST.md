# ✅ Quick Deployment Checklist - GitHub to Cloudflare

## Step 1: Create GitHub Repository
- [ ] Go to GitHub.com
- [ ] Click "+" → "New repository"
- [ ] Name: `bold-booth-website`
- [ ] Public or Private: Your choice
- [ ] DO NOT add README (we have one)
- [ ] Click "Create repository"

## Step 2: Upload Files to GitHub
**Essential files to upload:**
- [ ] `index.html`
- [ ] `css/` folder (with style.css and game-screenshots.css)
- [ ] `js/` folder (with script.js)
- [ ] `images/` folder (with ALL 16 image files including video)
- [ ] `README.md` (optional but recommended)

**Method:** Drag and drop to GitHub website OR use GitHub Desktop

## Step 3: Connect Cloudflare to GitHub
- [ ] Go to Cloudflare Dashboard (dash.cloudflare.com)
- [ ] Click "Pages" in sidebar
- [ ] Click "Create a project"
- [ ] Click "Connect to Git"
- [ ] Authorize GitHub access (first time only)
- [ ] Select your `bold-booth-website` repository
- [ ] Click "Begin setup"

## Step 4: Configure Build Settings
- [ ] Project name: `bold-booth` (or your choice)
- [ ] Production branch: `main`
- [ ] Framework preset: **None**
- [ ] Build command: **(empty)**
- [ ] Build output directory: **/** or **(empty)**
- [ ] Root directory: **(empty)**
- [ ] Click "Save and Deploy"

## Step 5: Wait for Deployment (1-3 minutes)
- [ ] Watch deployment progress
- [ ] Wait for "Success!" message
- [ ] Copy your live URL (e.g., `https://bold-booth.pages.dev`)

## Step 6: Test Your Live Site
- [ ] Visit your `.pages.dev` URL
- [ ] Test direct image: `https://your-site.pages.dev/images/logo.png`
- [ ] Verify logo shows in header
- [ ] Check all images load
- [ ] Test video plays
- [ ] Verify "Be Bold" tagline appears
- [ ] Test mobile menu (hamburger icon)
- [ ] Press F12 → Console (should be no red errors)

## ✅ Success Criteria
All of these should work:
- ✅ Site loads at `.pages.dev` URL
- ✅ Logo visible in navigation
- ✅ "Be Bold" tagline under logo
- ✅ Booth interface image shows
- ✅ Guest journey video plays
- ✅ Scoreboard display image shows
- ✅ All 8 game screenshots visible
- ✅ Wooden USB package image shows
- ✅ 3 emoji puzzle images show
- ✅ Hamburger menu works
- ✅ All navigation links work
- ✅ Contact form functional
- ✅ Mobile responsive

## Future Updates
To update your site:
1. Edit files on GitHub (or locally and push)
2. Commit changes
3. Cloudflare automatically redeploys!
4. Wait 1-2 minutes
5. Site is updated!

---

**That's it! Your site will be live with all images working.** 🚀
