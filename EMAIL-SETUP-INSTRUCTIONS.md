# Gmail App Password Setup Instructions

## What I've Done

✅ Installed Nodemailer
✅ Updated contact API to send emails
✅ Added environment variables to `.env.local`

## What You Need To Do

### Step 1: Enable 2-Step Verification on Your Gmail Account

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the steps to enable it (if not already enabled)

### Step 2: Generate an App Password

1. Go to: https://myaccount.google.com/apppasswords
   - (Or: Google Account → Security → 2-Step Verification → App passwords)
2. You might need to sign in again
3. In "Select app", choose **Mail** or **Other (Custom name)**
4. If "Other", type: **Portfolio Contact Form**
5. Click **Generate**
6. Google will show you a 16-character password like: `abcd efgh ijkl mnop`
7. **IMPORTANT:** Copy this password (remove spaces)

### Step 3: Update Your `.env.local` File

1. Open `.env.local` in your project
2. Replace `your-app-password-here` with the 16-character password (no spaces)
3. It should look like:
   ```
   EMAIL_PASSWORD=abcdefghijklmnop
   ```

### Step 4: Update Vercel Environment Variables (for production)

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these two variables:
   - `EMAIL_USER` = `maharjansirash1@gmail.com`
   - `EMAIL_PASSWORD` = `your-16-char-app-password`
4. Make sure to check: Production, Preview, and Development

### Step 5: Restart Your Dev Server

```bash
# Stop your dev server (Ctrl+C)
# Then restart:
npm run dev
```

## Testing

1. Go to your contact form: http://localhost:3001/#contact
2. Fill out the form with test data
3. Submit it
4. You should receive an email at: maharjansirash1@gmail.com
5. The message will also be saved to MongoDB

## How It Works

When someone submits your contact form:

1. ✅ Saves the message to MongoDB (database backup)
2. ✅ Sends you an email notification to `maharjansirash1@gmail.com`
3. ✅ You can reply directly to the sender (reply-to is set to their email)

## Troubleshooting

**Error: "Invalid login"**

- Make sure 2-Step Verification is enabled
- Check that you're using the App Password, not your regular Gmail password
- Remove any spaces from the password

**Not receiving emails?**

- Check your spam folder
- Verify `EMAIL_USER` is correct
- Make sure the dev server is restarted after updating `.env.local`

**Still having issues?**

- Check the console/terminal for error messages
- Verify all environment variables are set correctly
