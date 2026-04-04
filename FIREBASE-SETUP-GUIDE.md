# Firebase Setup Guide: JWT Password Authentication

This guide walks you through setting up the JWT-based password authentication for the HubDS project protection.

## Overview

-   **Password hashing**: BCrypt (salted, 10 rounds)
-   **Token format**: JWT (JSON Web Token)
-   **Token validity**: 30 days
-   **Backend**: Firebase Cloud Functions
-   **Frontend security**: Client-side token validation + expiration check

---

## Step 1: Create a Hashed Password Locally

### 1.1 Create the hash script

Edit `/functions/hash-password.js`:

```bash
# Navigate to functions folder
cd /Users/sebastiangonzalez/Projects/Sebgraph/functions

# Make a copy from the example
cp hash-password.example.js hash-password.js
```

### 1.2 Update the script with your desired password

Edit `/functions/hash-password.js`:

```javascript
// hash-password.js
const bcrypt = require('bcrypt')

async function hashPassword(password) {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

async function main() {
    // Replace this with your actual password
    const password = 'your-secret-password-here' // ← CHANGE THIS
    const hashedPassword = await hashPassword(password)
    console.log('Hashed password:')
    console.log(hashedPassword)
    console.log('')
    console.log('Copy the line above and save it somewhere secure!')
}

main()
```

### 1.3 Run the script to generate the hash

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph/functions
node hash-password.js
```

**Output example:**

```
Hashed password:
$2b$10$abcd1234efgh5678ijkl9012mnopqrstuvwxyz1234567890abcdefgh
```

**✅ Copy this hashed password** — you'll need it in Step 2.

### 1.4 (Optional) Securely store the original password

-   Save the original password in a password manager (1Password, LastPass, etc.)
-   Do **NOT** commit either password to Git
-   `.gitignore` already excludes `hash-password.js`

---

## Step 2: Set Up Firebase Project

### 2.1 Go to Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com)
2. Select your project: **Sebgraph**

### 2.2 Enable Cloud Functions (if not already enabled)

1. In the left sidebar, click **Functions**
2. Click **Get Started** (if not already enabled)
3. Choose a plan:
    - **Blaze plan** (pay-as-you-go) — recommended for production
    - Your project should already be on Blaze

### 2.3 Set Environment Variables

1. In Firebase Console, go to **Functions** → **Runtime settings**
2. Scroll to **Environment variables**
3. Click **Add environment variable**

**Add these two variables:**

| Variable Name         | Value                         | Notes                                                        |
| --------------------- | ----------------------------- | ------------------------------------------------------------ |
| `HUBDS_PASSWORD_HASH` | `$2b$10$abcd1234...`          | Paste the hashed password from Step 1.3                      |
| `JWT_SECRET`          | `your-long-random-secret-key` | Create a random, long string (use `openssl rand -base64 32`) |

**⚠️ SECURITY:**

-   Keep these values **secret**
-   Never commit them to Git
-   Only admins should have access to these values

---

## Step 3: Deploy Cloud Functions

### 3.1 Verify Firebase CLI is installed

```bash
firebase --version
```

If not installed:

```bash
npm install -g firebase-tools
```

### 3.2 Log in to Firebase

```bash
firebase login
```

### 3.3 Deploy the functions

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph

# Deploy only the functions (not hosting)
firebase deploy --only functions
```

**Expected output:**

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/sebgraph/overview
Function URL (verifyPassword): https://us-central1-sebgraph.cloudfunctions.net/verifyPassword
```

### 3.4 Verify deployment

1. Go to Firebase Console
2. Navigate to **Functions**
3. Check that `verifyPassword` and `verifyPasswordHttp` are listed as **Green/Running**

---

## Step 4: Update Your Site Configuration

### 4.1 Verify Firebase config in `src/` is correct

Check `/src/firebase.ts`:

```typescript
// firebase.ts
import { initializeApp } from 'firebase/app'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'sebgraph.firebaseapp.com',
    projectId: 'sebgraph',
    // ... other config
}

const app = initializeApp(firebaseConfig)
export const functions = getFunctions(app)
```

### 4.2 Build and deploy the site

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph

# Build for production
npm run build

# Copy /dist to your cPanel public_html
# (Upload via cPanel File Manager)
```

---

## Step 5: Test the Authentication

### 5.1 Test locally (dev mode)

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph

# Start the dev server
npm run dev
```

1. Navigate to `http://localhost:5173/projects/password-page`
2. Enter your password
3. Click **Submit**
4. Should navigate to `/projects/Hub`
5. Check browser DevTools → **Application** → **localStorage** → `projectAccessToken` (should have a JWT)

### 5.2 Test token validation

**In browser console:**

```javascript
// Paste this in DevTools Console
const token = localStorage.getItem('projectAccessToken')
const parts = token.split('.')
const payload = JSON.parse(atob(parts[1]))
console.log('Token Payload:', payload)
console.log('Expires:', new Date(payload.exp * 1000))
```

Expected output:

```
Token Payload: {
  access: "hubds",
  iat: 1712282400,
  exp: 1724904800  // 30 days from now
}
Expires: Thu Aug 29 2024 ...
```

### 5.3 Test in production

1. Build and upload to cPanel
2. Navigate to `https://sebastiangonzalez.design/projects/password-page`
3. Try entering the password
4. Should work exactly like the dev version

---

## Step 6: Troubleshooting

### "Service configuration error" message

**Cause**: `HUBDS_PASSWORD_HASH` environment variable not set

**Fix**:

1. Go to Firebase Console → Functions → Runtime settings
2. Verify `HUBDS_PASSWORD_HASH` is set
3. Redeploy: `firebase deploy --only functions`

### "An error occurred while verifying the password"

**Cause**: Firebase Functions not responding or network error

**Fix**:

1. Check Firebase Console → Functions → check if `verifyPassword` is running
2. Check browser Network tab (DevTools) for failed requests
3. Try again or contact support

### Token not persisting after page refresh

**Normal behavior** — This is expected if:

-   Page refreshes and `projectAccessToken` localStorage is empty
-   Redirect to password page is correct

**To keep user logged in:**

-   Token will persist in localStorage until expiry (30 days)
-   User must manually enter password again if they clear browser data

### "Incorrect password" after multiple attempts

**Cause**: Wrong password or hash mismatch

**Fix**:

1. Verify you hashed the correct password in Step 1
2. Verify the hash was copied correctly to `HUBDS_PASSWORD_HASH`
3. Redeploy functions: `firebase deploy --only functions`
4. Try again

---

## Step 7: Maintenance

### Rotating the password

1. Create new hash:
    ```bash
    cd functions && node hash-password.js
    ```
2. Update `HUBDS_PASSWORD_HASH` in Firebase Console runtime settings
3. Redeploy: `firebase deploy --only functions`
4. All existing tokens remain valid until 30-day expiry

### Rotating the JWT secret

1. Generate new secret:
    ```bash
    openssl rand -base64 32
    ```
2. Update `JWT_SECRET` in Firebase Console
3. Redeploy: `firebase deploy --only functions`
4. **Note**: Existing tokens will be invalid (users must re-login)

### Monitoring

**View function logs:**

```bash
firebase functions:log
```

This shows all authentication attempts, errors, and performance metrics.

---

## Security Checklist

-   [x] Password is hashed with BCrypt (10 rounds)
-   [x] JWT tokens have 30-day expiration
-   [x] Environment variables stored securely in Firebase (not in code)
-   [x] Client-side token validation prevents tampering
-   [x] CORS is configured to only allow your domain
-   [x] `.gitignore` excludes `hash-password.js` and `.env` files
-   [ ] Share passwords via secure channel (1Password, Slack Enterprise, etc.)
-   [ ] Rotate password/secrets periodically (recommended: every 90 days)
-   [ ] Monitor function logs for suspicious activity

---

## Next Steps

1. ✅ Generate hashed password (Step 1)
2. ✅ Set environment variables in Firebase (Step 2)
3. ✅ Deploy Cloud Functions (Step 3)
4. ✅ Test locally and in production (Step 5)
5. ⏳ Share password with trusted users via secure channel
6. ⏳ Monitor access and logs periodically

---

## Support

For issues:

1. Check Firebase Console → Functions → Logs
2. Check browser DevTools → Console for client errors
3. Verify environment variables are set correctly
4. Ensure Cloud Functions are deployed and running
