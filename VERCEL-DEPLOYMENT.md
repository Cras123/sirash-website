# Vercel Deployment Guide

## 🚨 IMPORTANT: Add Environment Variables FIRST!

Before your contact form will work on Vercel, you **MUST** add these environment variables:

### Step-by-Step Instructions:

## 1. Go to Your Vercel Dashboard

- Visit: https://vercel.com/dashboard
- Click on your project: `sirash-website`

## 2. Go to Settings → Environment Variables

- In your project, click **Settings** (top navigation)
- Click **Environment Variables** (left sidebar)

## 3. Add These Three Variables:

### Variable 1: MONGODB_URI

- **Key:** `MONGODB_URI`
- **Value:** `mongodb+srv://maharjansirash1:sirash123@cluster0.hbhhg4h.mongodb.net/sirash-portfolio?retryWrites=true&w=majority`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

### Variable 2: EMAIL_USER

- **Key:** `EMAIL_USER`
- **Value:** `maharjansirash1@gmail.com`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

### Variable 3: EMAIL_PASSWORD

- **Key:** `EMAIL_PASSWORD`
- **Value:** `cufrweyefpetvldb` (your Gmail App Password)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Click **Save**

## 4. Redeploy Your Application

After adding the environment variables:

### Option A: Redeploy via Dashboard

1. Go to **Deployments** tab
2. Click the **three dots** (...) on your latest deployment
3. Click **Redeploy**
4. Check ✅ "Use existing Build Cache"
5. Click **Redeploy**

### Option B: Redeploy via Git Push

```bash
git add .
git commit -m "Update environment configuration"
git push origin main
```

## 5. Test Your Contact Form

Once deployed:

1. Visit your deployed site: `https://your-site.vercel.app`
2. Go to the contact form
3. Fill it out and submit
4. You should see: ✅ **"Thank you for your message! I'll get back to you soon."**
5. Check your Gmail inbox for the notification!

## 🔍 Troubleshooting

### Still Getting "Something went wrong" Error?

1. **Check Vercel Logs:**

   - Go to your project in Vercel
   - Click **Deployments**
   - Click on the latest deployment
   - Click **Functions** tab
   - Look for `/api/contact` logs
   - Check for error messages

2. **Common Issues:**

   - ❌ Environment variables not saved
   - ❌ Typo in environment variable names (must be EXACT)
   - ❌ Didn't redeploy after adding variables
   - ❌ Gmail App Password is incorrect or revoked

3. **Verify Environment Variables:**
   - Go to Settings → Environment Variables
   - Make sure all 3 variables are showing
   - Click "Edit" to verify the values are correct (no extra spaces!)

### Check if Environment Variables are Loaded

You can add this temporary API route to test:

```typescript
// app/api/check-env/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mongodbConfigured: !!process.env.MONGODB_URI,
    emailConfigured: !!process.env.EMAIL_USER && !!process.env.EMAIL_PASSWORD,
  });
}
```

Visit: `https://your-site.vercel.app/api/check-env`

You should see:

```json
{
  "mongodbConfigured": true,
  "emailConfigured": true
}
```

If both are `false`, the environment variables aren't loaded!

## 📧 Gmail App Password

If you need to regenerate your Gmail App Password:

1. Go to: https://myaccount.google.com/apppasswords
2. Generate a new one
3. Update the `EMAIL_PASSWORD` in Vercel
4. Redeploy

## ✅ Success Checklist

- [ ] All 3 environment variables added in Vercel
- [ ] Environment variables enabled for Production, Preview, Development
- [ ] Redeployed after adding variables
- [ ] Contact form works (no "something went wrong" error)
- [ ] Receiving emails at maharjansirash1@gmail.com
- [ ] Messages saved in MongoDB Atlas

---

**Once everything works, delete this file or keep it for reference!**
