# Vercel Build Monitoring Setup Guide

## Quick Setup (5 Minutes)

### 1. Email Notifications (Already Enabled by Default)
- ✅ **Automatic**: Vercel sends emails for failed deployments to the deployment creator
- **Customize**: Go to [Vercel Notifications](https://vercel.com/account/notifications)
  - Turn off success notifications if they're too noisy
  - Keep failure notifications ON

### 2. Slack Notifications (Recommended)
1. Go to [Vercel Slack Integration](https://vercel.com/integrations/slack)
2. Click "Add Integration"
3. Select your workspace and project
4. In Slack, type `/vercel subscribe` in your preferred channel
5. Choose notification types:
   - ✅ Deployment Failed (Critical)
   - ✅ Production Deployment (Important)
   - ⬜ Preview Deployment (Optional - can be noisy)

### 3. GitHub Status Checks (Automatic)
- ✅ **Already Working**: GitHub shows build status on PRs
- View all deployments: `https://github.com/JohnConnorCode/portfolio-blog/deployments`
- Failed builds show ❌ in PR checks

## Advanced Setup

### Create a GitHub Action for Build Failure Alerts
Create `.github/workflows/vercel-monitor.yml`:

```yaml
name: Vercel Build Monitor
on:
  deployment_status:

jobs:
  notify-on-failure:
    if: github.event.deployment_status.state == 'failure'
    runs-on: ubuntu-latest
    steps:
      - name: Comment on Commit
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.repos.createCommitComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              commit_sha: context.sha,
              body: `⚠️ Vercel deployment failed! [View logs](${context.payload.deployment_status.target_url})`
            })
```

### Set Up Webhooks for Custom Monitoring
1. Go to Project Settings → Webhooks
2. Add endpoint URL (e.g., your monitoring service)
3. Select events:
   - `deployment.created`
   - `deployment.error`
   - `deployment.failed`

### Local Build Testing Before Push
Add to `package.json`:
```json
{
  "scripts": {
    "prebuild": "npm run lint && npm run type-check",
    "verify": "npm run build && echo '✅ Build successful!'",
    "prepush": "npm run verify"
  }
}
```

### Git Pre-Push Hook
Create `.husky/pre-push`:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔍 Testing build before push..."
npm run build || {
  echo "❌ Build failed! Fix errors before pushing."
  exit 1
}
```

## Best Practices

### 1. Test Locally First
```bash
# Always run before pushing
npm run build
```

### 2. Monitor These Key Metrics
- Build time (should be < 5 minutes)
- Build size (watch for sudden increases)
- Error frequency (pattern detection)

### 3. Common Build Issues to Watch For
- `window is not defined` - SSR issues
- Missing environment variables
- Type errors in production build
- Large bundle sizes

### 4. Quick Checks Dashboard
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub Deployments**: [github.com/JohnConnorCode/portfolio-blog/deployments](https://github.com/JohnConnorCode/portfolio-blog/deployments)
- **Analytics**: [vercel.com/analytics](https://vercel.com/analytics)

## Troubleshooting Failed Builds

1. **Check Build Logs**:
   - Go to Vercel Dashboard → Project → Failed Deployment
   - Click "View Function Logs" or "View Build Logs"

2. **Common Fixes**:
   ```bash
   # Clear cache and rebuild
   rm -rf .next node_modules
   npm install
   npm run build
   ```

3. **Environment Variables**:
   - Ensure all env vars are set in Vercel Dashboard
   - Settings → Environment Variables

## Status Badge for README
Add to your README.md:
```markdown
![Vercel Deploy](https://vercel.com/button)
[![Deploy Status](https://img.shields.io/github/deployments/JohnConnorCode/portfolio-blog/production?label=vercel&logo=vercel)](https://github.com/JohnConnorCode/portfolio-blog/deployments)
```

## Summary Checklist
- [ ] Email notifications configured
- [ ] Slack integration installed
- [ ] GitHub checks visible on PRs
- [ ] Local build testing script added
- [ ] Pre-push hook installed (optional)
- [ ] Webhooks configured (optional)
- [ ] Status badge added to README (optional)

---
*Last updated: December 2024*