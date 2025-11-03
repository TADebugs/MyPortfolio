# 🔗 Matrix Page Redirect Setup

## Current Configuration

The Matrix page is now set up to redirect to your portfolio pages:

- **Red Pill** → Good Look Portfolio (3D Island Adventure)
- **Blue Pill** → Quick Look Portfolio (Space Theme)

## 📝 Update Your URLs

### Step 1: Get Your Vercel URLs

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your deployed projects
3. Copy the deployment URLs:
   - Good Look Portfolio: `https://your-project-name.vercel.app`
   - Quick Look Portfolio: `https://your-project-name.vercel.app`

### Step 2: Update the URLs in Code

Open `matrix_page/src/main.js` and update these lines:

```javascript
// Line 20 - Update this with your actual Good Look Portfolio URL
const redPillUrl = 'https://your-good-look-portfolio-url.vercel.app';

// Line 27 - Update this with your actual Quick Look Portfolio URL  
const bluePillUrl = 'https://your-quick-look-portfolio-url.vercel.app';
```

### Step 3: Redeploy

After updating the URLs:

```bash
cd matrix_page
git add .
git commit -m "Update redirect URLs"
git push
```

Vercel will automatically redeploy with the new URLs.

---

## 🎯 URL Options

### Option 1: Vercel Deployment URLs (Recommended)

If your portfolios are deployed separately on Vercel:

```javascript
const redPillUrl = 'https://good-look-portfolio.vercel.app';
const bluePillUrl = 'https://quick-look-portfolio.vercel.app';
```

### Option 2: Custom Domains

If you have custom domains:

```javascript
const redPillUrl = 'https://portfolio.yourdomain.com';
const bluePillUrl = 'https://portfolio2.yourdomain.com';
```

### Option 3: Relative Paths (Local Development)

If you're testing locally or have all sites in the same repo:

```javascript
const redPillUrl = '../good_look_page';
const bluePillUrl = '../quick_look_page';
```

---

## ✅ Testing

1. Deploy the Matrix page to Vercel
2. Click the Red Pill → Should redirect to Good Look Portfolio
3. Click the Blue Pill → Should redirect to Quick Look Portfolio

---

## 🔧 Troubleshooting

### Redirect Not Working?

1. **Check URLs are correct** - No typos, include `https://`
2. **Check CORS** - Vercel should handle this automatically
3. **Check if sites are deployed** - Make sure both portfolios are live
4. **Check browser console** - Look for any errors

### Want to Test Locally?

Use relative paths and test with a local server:

```bash
cd matrix_page
npm run dev
```

Then test the redirects.

---

**Note**: Make sure all three projects are deployed to Vercel before updating the URLs!

