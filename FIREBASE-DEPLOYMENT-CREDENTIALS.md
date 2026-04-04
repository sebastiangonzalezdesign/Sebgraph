# Firebase Deployment - Quick Setup

## Generated Credentials (Save Securely)

**Password Hash:**

```
$2b$10$T28tuMMHJiPS.tHekW/XEufWMBVRdp1r77fZBj8jK8J2xCuFch5J2
```

**JWT Secret:**

```
1TN49L6xAnOypGTqi41xGM3HNpZZEE9/YGIZTx8goso=
```

**Test Password:**

```
Portfolio2026!
```

---

## Deployment Option 1: Manual Deploy via Firebase Console

### Step 1: Set Environment Variables in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com) → Select **sebgraph** project
2. Click **Functions** in the left sidebar
3. Click **Runtime settings** (gear icon at top)
4. Scroll to **Environment variables** section
5. Click **Add environment variable**

#### Add Variable 1:

-   **Variable name**: `HUBDS_PASSWORD_HASH`
-   **Value**: `$2b$10$T28tuMMHJiPS.tHekW/XEufWMBVRdp1r77fZBj8jK8J2xCuFch5J2`
-   Click **Save**

#### Add Variable 2:

-   **Variable name**: `JWT_SECRET`
-   **Value**: `1TN49L6xAnOypGTqi41xGM3HNpZZEE9/YGIZTx8goso=`
-   Click **Save**

### Step 2: Deploy Functions via Firebase Console

1. In Firebase Console, go to **Functions**
2. Click **Deploy** or **Redeploy** (there may be a prompt)
3. Wait for deployment to complete (should see green checkmarks)

---

## Deployment Option 2: Deploy via CLI (After Authentication)

If you've set up Firebase CLI authentication correctly:

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph

# Option A: With project specified
firebase deploy --only functions --project sebgraph

# Option B: If .firebaserc is configured
firebase deploy --only functions
```

---

## Testing the Deployment

### Local Testing (before production):

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph

# Start dev server
npm run dev
```

1. Open `http://localhost:5173/projects/password-page`
2. Enter password: `Portfolio2026!`
3. Should redirect to `/projects/Hub` with JWT token stored

### Production Testing:

1. Build and upload to cPanel:

    ```bash
    npm run build
    # Upload /dist folder to cPanel public_html
    ```

2. Test at: `https://sebastiangonzalez.design/projects/password-page`
3. Enter password: `Portfolio2026!`
4. Should work the same as local

---

## Verify Deployment

After deploying, check:

1. **Firebase Console** → **Functions**

    - Should see `verifyPassword` and `verifyPasswordHttp` marked as **Green/Running**

2. **Check Function Logs**:

    ```bash
    firebase functions:log --project sebgraph
    ```

3. **Test Function Directly** (via Firebase Console):
    - Click on `verifyPassword` function
    - Go to **Testing** tab
    - Send a test request with password

---

## Files Ready for Deployment

-   ✅ `functions/verifyPassword.js` - Password verification with JWT
-   ✅ `src/pages/PasswordPage.tsx` - Frontend password input & token storage
-   ✅ `src/components/ProtectedRoute.tsx` - Token validation & route protection
-   ✅ `functions/.env.local` - Environment variables for local testing
-   ✅ `functions/package.json` - Updated with jsonwebtoken dependency

---

## Next Steps

1. **Set environment variables in Firebase Console** (Step 1 above)
2. **Deploy functions** (Step 2 above)
3. **Build and upload site to cPanel**
4. **Test password authentication** in production
5. **Monitor function logs** for any errors

---

## Troubleshooting

### "Service configuration error" in password form

→ Environment variables not set in Firebase Console

**Fix**: Verify both `HUBDS_PASSWORD_HASH` and `JWT_SECRET` are set in Firebase Console > Functions > Runtime settings

### "An error occurred while verifying the password"

→ Firebase Functions not responding

**Fix**:

1. Check Firebase Console → Functions → Logs
2. Verify functions are deployed and marked as running
3. Check Network tab in browser DevTools for errors

### CLI authentication issues

→ Use Firebase Console to set environment variables and deploy instead

**Alternative**: Open Firebase Console directly and use the deploy button there

---

## Local Files

You can keep these files locally but **DO NOT** commit sensitive data:

-   ✅ `functions/hash-password.js` - Generate hashes (keep locally, in .gitignore)
-   ✅ `functions/.env.local` - Local variables (keep locally, in .gitignore)
-   ✅ `functions/verifyPassword.js` - Deploy this to Firebase ✓
-   ✅ `src/pages/PasswordPage.tsx` - Deploy with site ✓
-   ✅ `src/components/ProtectedRoute.tsx` - Deploy with site ✓
