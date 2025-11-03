# 🔧 Fixing 404 Errors on Vercel

## The Problem
You're getting `404: NOT_FOUND` errors because Vercel can't find your `index.html` file.

## ✅ Step-by-Step Fix

### Step 1: Check Your Project Name in Vercel

Your project is named `my-portfolio` but the actual code is in a subfolder. You need to set the **Root Directory**.

### Step 2: Set Root Directory in Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on **"my-portfolio"** project
3. Go to **Settings** tab
4. Scroll to **General** → **Root Directory**
5. Click **Edit**

### Step 3: Choose the Correct Root Directory

Based on which project you're deploying, set it to:

**If deploying "Quick Look Portfolio" (3D Island):**
- Set to: `quick_look_page`
- Click **Save**

**If deploying "Good Look Portfolio" (Space Theme):**
- Set to: `good_look_page`
- Click **Save**

**If deploying "Matrix Page":**
- Set to: `matrix_page`
- Click **Save**

### Step 4: Verify Build Settings

In the same **Settings** → **General** section, make sure:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x (or latest)
```

### Step 5: Check Build Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check the **Build Logs**

**Look for:**
- ✅ `Build completed successfully`
- ✅ `Output: dist`
- ✅ Files being copied to `dist/`

**If you see errors:**
- Check if `npm install` completed
- Check if `npm run build` succeeded
- Look for any file path errors

### Step 6: Verify Build Output

In the build logs, you should see something like:

```
✓ built in 3.45s
dist/index.html                   0.48 kB
dist/assets/index-abc123.js       123.45 kB
dist/assets/index-def456.css      45.67 kB
```

If you DON'T see `dist/index.html`, the build failed.

### Step 7: Redeploy

After setting Root Directory:

1. Go to **Deployments** tab
2. Click **⋯** (three dots) on latest deployment
3. Click **Redeploy**
4. Select **Use existing Build Cache** (optional)
5. Click **Redeploy**

---

## 🔍 Troubleshooting

### Issue: Build Fails

**Check these:**

1. **Node modules missing:**
   ```
   Error: Cannot find module...
   ```
   → Make sure `package.json` exists in the root directory folder

2. **Build command fails:**
   ```
   Error: command failed
   ```
   → Check if `npm run build` works locally
   → Test: `cd quick_look_page && npm run build`

3. **File not found errors:**
   ```
   Error: ENOENT: no such file or directory
   ```
   → Check file paths in your code
   → Make sure all assets exist

### Issue: Build Succeeds but 404 Still Happens

**Check these:**

1. **Root Directory is wrong:**
   - Must match exactly: `quick_look_page` (not `quick look page`)
   - Check for typos or spaces

2. **Output Directory is wrong:**
   - Should be: `dist`
   - Vite builds to `dist` by default

3. **vercel.json is missing or wrong:**
   - File must be in: `quick_look_page/vercel.json`
   - Should contain the rewrites for SPA routing

4. **index.html not in dist:**
   - Check build logs
   - Should see `dist/index.html` in output

### Issue: Files Not Loading (CSS, JS, Images)

**Possible causes:**

1. **Base path issue:**
   - Vite might need `base: '/'` in `vite.config.js`
   - Check if assets use absolute paths

2. **Public folder:**
   - Files in `public/` should be accessible
   - Check if they're copied to `dist/`

---

## 🧪 Test Locally First

Before deploying, test the build locally:

```bash
# Navigate to project
cd quick_look_page

# Install dependencies
npm install

# Build the project
npm run build

# Check if dist folder exists
ls dist/

# Should see:
# - index.html
# - assets/ folder
# - Any files from public/

# Preview the build
npm run preview
```

If this works locally but fails on Vercel, it's a configuration issue.

---

## 📋 Quick Checklist

Before redeploying, verify:

- [ ] Root Directory is set to correct subfolder (`quick_look_page`)
- [ ] `vercel.json` exists in the project folder
- [ ] `package.json` exists in the project folder
- [ ] Build Command is `npm run build`
- [ ] Output Directory is `dist`
- [ ] Framework is set to `Vite`
- [ ] Local build works (`npm run build` succeeds)
- [ ] `dist/index.html` exists after local build

---

## 🎯 Expected Configuration

Your Vercel project settings should look like:

```
Project Name: my-portfolio (or your custom name)
Root Directory: quick_look_page
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

And your `quick_look_page/vercel.json` should have:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## ✅ Success Indicators

After fixing, you should see:

- ✅ Build completes successfully
- ✅ `dist/index.html` is created
- ✅ Site loads at `https://my-portfolio.vercel.app`
- ✅ No 404 errors
- ✅ All routes work (`/`, `/about`, etc.)

---

**Still stuck?** Share the build logs from Vercel dashboard and I can help debug further!

