# Vercel Environment Variables Setup

## Email Notifications with Resend

To enable email notifications for your contact form in production:

### 1. Add Environment Variables in Vercel Dashboard

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

| Variable Name | Value | Environment |
|--------------|-------|------------|
| `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |
| `NOTIFICATION_EMAIL` | john@johnconnor.xyz | Production, Preview, Development |

### 2. Using Vercel CLI (Alternative)

```bash
vercel env add RESEND_API_KEY production
vercel env add NOTIFICATION_EMAIL production
```

### 3. Redeploy Your Application

After adding the environment variables, you need to redeploy:
- Push a new commit, or
- Trigger a manual redeploy from the Vercel dashboard

### 4. Update Email "From" Address

Once your domain is verified in Resend:
1. Update `src/lib/notifications.ts` line 45
2. Change from `onboarding@resend.dev` to `noreply@yourdomain.com`

### Testing

The contact form will now send real email notifications to your configured email address when someone submits the form.

## Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Keep your API keys secure
- Rotate keys periodically
- Use different keys for development and production if needed