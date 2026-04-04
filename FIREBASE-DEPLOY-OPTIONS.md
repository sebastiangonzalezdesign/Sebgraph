# Firebase Deployment Guide - CLI & Manual Options

## Status

-   ✅ All source code ready: `functions/verifyPassword.js`
-   ✅ Environment variables prepared: `.env` file created
-   ✅ `.firebaserc` configured with project ID
-   ⚠️ CLI deployment hit permission issues (account permissions on Google Cloud)

---

## Option 1: Deploy via Firebase CLI (Requires Account Access Fix)

**Problem**: Current Google account (`sebgraph7@gmail.com`) lacks Cloud Functions deployment permissions.

**Solution - Grant Permissions**:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select project **sebgraph**
3. Go to **IAM & Admin** → **IAM**
4. Find your email: `sebgraph7@gmail.com`
5. Click **Edit** (pencil icon)
6. Add these roles:
    - **Cloud Functions Developer**
    - **Cloud Functions Service Agent**
    - **Service Account User**
7. Click **Save**
8. Wait 2-3 minutes for permissions to propagate
9. Try deployment again:

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph
firebase deploy --only functions
```

---

## Option 2: Deploy via gcloud CLI (Service Account)

If you have a service account JSON key:

```bash
# Set the service account
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"

# Deploy
cd /Users/sebastiangonzalez/Projects/Sebgraph
firebase deploy --only functions --project sebgraph
```

---

## Option 3: Deploy via Google Cloud Console (Web UI)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select project **sebgraph**
3. Go to **Cloud Functions**
4. Click **+ Create Function**

**Configure Function:**

-   **Environment**: Node.js 22
-   **Function name**: `verifyPassword`
-   **Trigger**: Cloud Pub/Sub (or HTTP)
-   **Runtime settings**:
    -   **Memory**: 256 MB
    -   **Timeout**: 60 seconds

**Source code**:

In the **inline editor**, paste the code from [functions/verifyPassword.js](/functions/verifyPassword.js)

**Set Environment Variables**:

Click **Runtime settings** → **Environment variables**

Add:

-   `HUBDS_PASSWORD_HASH` = `$2b$10$T28tuMMHJiPS.tHekW/XEufWMBVRdp1r77fZBj8jK8J2xCuFch5J2`
-   `JWT_SECRET` = `1TN49L6xAnOypGTqi41xGM3HNpZZEE9/YGIZTx8goso=`

**Deploy** → Click **Create**

---

## Option 4: Deploy via GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
    push:
        branches:
            - main

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3

            - name: Deploy Functions
              uses: FirebaseExtended/action-hosting-deploy@v0
              with:
                  repoToken: '${{ secrets.GITHUB_TOKEN }}'
                  firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_SEBGRAPH }}'
                  projectId: sebgraph
```

Then add your service account key as a GitHub secret.

---

## Environment Variables Ready

**For any deployment method, use these values:**

```
HUBDS_PASSWORD_HASH=$2b$10$T28tuMMHJiPS.tHekW/XEufWMBVRdp1r77fZBj8jK8J2xCuFch5J2
JWT_SECRET=1TN49L6xAnOypGTqi41xGM3HNpZZEE9/YGIZTx8goso=
```

---

## Files Ready for Deployment

-   ✅ `functions/verifyPassword.js` - Main authentication function
-   ✅ `functions/index.js` - Firebase Cloud Functions wrapper
-   ✅ `functions/.env` - Environment variables (not committed, for local testing)
-   ✅ `src/pages/PasswordPage.tsx` - Frontend login component
-   ✅ `src/components/ProtectedRoute.tsx` - Route protection
-   ✅ `.firebaserc` - Project configuration
-   ✅ `firebase.json` - Firebase config

---

## Recommended Next Steps

**Option A** (Fastest):

1. Go to [Google Cloud Console IAM](https://console.cloud.google.com/iam-admin/iam)
2. Grant your account Cloud Functions permissions (2-3 minutes)
3. Run: `firebase deploy --only functions`

**Option B** (Web UI):

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create Functions manually with the code and env vars above
3. Done!

**Option C** (After any deployment):

1. Build: `npm run build`
2. Upload `/dist` to cPanel
3. Test at: `https://sebastiangonzalez.design/projects/password-page`
4. Password: `Portfolio2026!`

---

## Verification Checklist

After deployment, verify:

-   [ ] Functions deployed in Firebase Console (green status)
-   [ ] Environment variables set in Cloud Functions
-   [ ] Test function call returns `{success: true, token: "..."}`
-   [ ] Site built locally: `npm run build`
-   [ ] Password page accessible
-   [ ] Can log in with `Portfolio2026!`
-   [ ] JWT token stored in localStorage

---

## Troubleshoot Permission Denied

**If you see: "The caller does not have permission"**

1. Verify you're using the correct Google account
2. Go to [IAM Console](https://console.cloud.google.com/iam-admin/iam)
3. Make sure your account has **Editor** or **Cloud Functions Developer** role
4. Wait 2-3 minutes (Google Cloud permissions cache)
5. Try again

---

## Local Testing (Before Production)

```bash
# Start dev server
npm run dev

# Test password page at:
# http://localhost:5173/projects/password-page
# Password: Portfolio2026!
```

Check browser console for logs or errors.
