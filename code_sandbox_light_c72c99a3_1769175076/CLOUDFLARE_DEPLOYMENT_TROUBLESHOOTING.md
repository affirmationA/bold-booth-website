# 🔧 Cloudflare Pages Deployment - Images Not Showing

## Issue
Images and video are broken on Cloudflare Pages deployment but work in preview.

---

## ✅ Files Confirmed Present

All required files exist in project:
- ✅ 16 image files in `images/` folder
- ✅ 1 video file (17.5MB) in `images/` folder
- ✅ HTML paths are correct (`images/logo.png`, etc.)
- ✅ Folder name is lowercase `images/`

---

## 🔍 Diagnostic Steps

### Step 1: Test Image URLs Directly

Visit your Cloudflare site and try accessing:
```
https://your-site.pages.dev/images/logo.png
```

**Results:**
- ✅ Image loads = Files uploaded, check HTML paths
- ❌ 404 Error = Files not uploaded to Cloudflare
- ❌ 403 Error = Permission/access issue

### Step 2: Check Browser Console

1. Open live site
2. Press F12
3. Go to Console tab
4. Look for errors:
   - `Failed to load resource: 404` (file not found)
   - `Mixed content` (HTTP vs HTTPS issue)
   - CORS errors
   - Path errors

### Step 3: Check Cloudflare Deployment Log

1. Cloudflare Dashboard → Pages
2. Your project → Deployments
3. Latest deployment → View logs
4. Look for:
   - File upload confirmations
   - Errors about large files
   - Missing folder warnings

---

## 🚨 Common Issues & Solutions

### Issue 1: Files Not Uploaded

**Cause:** Publish tab may not have uploaded binary files

**Solution A: Republish from Publish Tab**
1. Go to Publish tab
2. Click Deploy/Publish again
3. Wait for completion
4. Check if images appear

**Solution B: Manual Cloudflare Upload**
1. Cloudflare Dashboard → Pages
2. Your project → Settings
3. Look for "Direct upload" or "Manual deployment"
4. Upload all files including `images/` folder

**Solution C: Use Git Repository (Recommended)**
1. Create GitHub/GitLab repository
2. Upload all project files
3. Connect Cloudflare Pages to repository
4. Auto-deploy on push

---

### Issue 2: Video File Too Large (17.5MB)

**Cloudflare Limits:**
- 25MB per file (you're under this)
- But large files may cause deployment issues

**Solutions:**

**Option A: Compress Video**
- Reduce from 17.5MB to ~5MB
- Maintain quality
- Faster loading

**Option B: External Video Hosting**
- YouTube (embed)
- Vimeo (embed)
- Cloudflare Stream
- Removes file from deployment

**Option C: Remove Video Temporarily**
- Deploy without video first
- Verify images work
- Add video back later

---

### Issue 3: Path Issues

**Check for:**
- ✅ Lowercase folder names (`images/` not `Images/`)
- ✅ No leading slashes (`images/logo.png` not `/images/logo.png`)
- ✅ Correct file extensions (`.png` not `.PNG`)
- ✅ No spaces in filenames

**All paths in your project are correct.**

---

### Issue 4: Build Configuration

**Cloudflare Pages might need build settings:**

1. Go to Cloudflare Dashboard → Pages → Your Project
2. Settings → Build & deployments
3. Check:
   - **Build command:** (leave empty for static site)
   - **Build output directory:** `/` or leave empty
   - **Root directory:** `/` or leave empty

**For static HTML sites, these should be empty or `/`.**

---

## 🔧 Recommended Action Plan

### Step 1: Verify Upload
```
Visit: https://your-site.pages.dev/images/logo.png
```
If 404 error → Files didn't upload

### Step 2: Check Cloudflare Settings
- Build output directory: `/` 
- Root directory: `/`
- No build commands needed

### Step 3: Republish
- Use Publish tab again
- Or use Cloudflare's direct upload

### Step 4: If Still Broken
**Two paths:**

**Path A: Git Deployment (Best)**
1. Create GitHub repository
2. Upload all files
3. Connect to Cloudflare Pages
4. Auto-deploy

**Path B: Compress Video**
1. Reduce video from 17.5MB to 5MB
2. Republish
3. Faster loading + more reliable

---

## 📋 File Checklist

**All files that MUST be deployed:**

### Root Files:
- ✅ `index.html` (117KB)

### CSS Folder:
- ✅ `css/style.css` (~58KB)
- ✅ `css/game-screenshots.css` (~5KB)

### JS Folder:
- ✅ `js/script.js` (~18KB)

### Images Folder (16 files):
- ✅ `images/logo.png` (249KB)
- ✅ `images/booth-interface.png` (958KB)
- ✅ `images/guest-journey-video.mp4` (17.5MB) ⚠️ Large file
- ✅ `images/scoreboard-display.png` (342KB)
- ✅ `images/game-welcome-screen.png` (62KB)
- ✅ `images/game-play-for-points.png` (62KB)
- ✅ `images/game-quick-message.png` (49KB)
- ✅ `images/game-most-likely-to.png` (43KB)
- ✅ `images/game-finish-the-sentence.png` (40KB)
- ✅ `images/game-end-of-night.png` (78KB)
- ✅ `images/game-end-of-night-continued.png` (69KB)
- ✅ `images/game-emoji-translator.png` (40KB)
- ✅ `images/wooden-usb-package.jpg` (847KB)
- ✅ `images/emoji-puzzles-1.png` (57KB)
- ✅ `images/emoji-puzzles-2.png` (76KB)
- ✅ `images/emoji-puzzles-3.png` (75KB)

**Total size: ~20.5MB** (mostly the 17.5MB video)

---

## 🎯 Next Steps

**What to check:**
1. Can you access `https://your-site.pages.dev/images/logo.png` directly?
2. What errors show in browser console (F12)?
3. What does Cloudflare deployment log say?

**Share this info and we can pinpoint the exact issue!**

---

## 💡 Quick Fixes to Try

### Quick Fix 1: Republish
Go to Publish tab → Deploy again

### Quick Fix 2: Check Cloudflare Build Settings
Dashboard → Pages → Settings → Build & deployments
- Set output directory to `/`

### Quick Fix 3: Remove Large Video Temporarily
- Test if images work without the 17.5MB video
- Add video back after images confirmed working

---

**Status:** Awaiting diagnostic info to identify exact cause
