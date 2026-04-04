# Firebase Console Deployment: Portfolio Access Control

## Step 1: Get Your Function Code

Copy this entire code:

```javascript
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 * Verify password and return JWT token
 * Expected environment variable: HUBDS_PASSWORD_HASH
 */
async function verifyPassword(data, context) {
    const { password } = data

    // Validate input
    if (!password || typeof password !== 'string') {
        return {
            success: false,
            error: 'Invalid password format',
        }
    }

    // Get hashed password from environment
    const hashedPassword = process.env.HUBDS_PASSWORD_HASH

    if (!hashedPassword) {
        console.error('HUBDS_PASSWORD_HASH environment variable not set')
        return {
            success: false,
            error: 'Service configuration error',
        }
    }

    try {
        // Compare provided password with stored hash
        const isPasswordValid = await bcrypt.compare(password, hashedPassword)

        if (isPasswordValid) {
            // Generate JWT token (valid for 30 days)
            const jwtSecret =
                process.env.JWT_SECRET || 'your-secret-key-change-in-prod'
            const token = jwt.sign(
                {
                    access: 'hubds',
                    iat: Math.floor(Date.now() / 1000),
                },
                jwtSecret,
                { expiresIn: '30d' }
            )

            return {
                success: true,
                token: token,
            }
        } else {
            return {
                success: false,
                error: 'Incorrect password',
            }
        }
    } catch (error) {
        console.error('Password verification error:', error)
        return {
            success: false,
            error: 'An error occurred while verifying the password',
        }
    }
}

module.exports = { verifyPassword }
```

## Step 2: Go to Firebase Console

1. Open: https://console.cloud.google.com
2. Select project: **sebgraph**
3. In left sidebar, go to **Cloud Functions**

## Step 3: Create Function

1. Click **+ Create Function**
2. Configure:
    - **Environment**: Node.js 22
    - **Function name**: `portfolioAccessControl` or `verifyPassword`
    - **Trigger type**: Cloud Pub/Sub (or HTTP)
    - **Create a new topic**: `portfolio-access`
    - **Runtime settings**:
        - Memory: 256 MB
        - Timeout: 60 seconds

## Step 4: Add Source Code

1. In **Inline editor**, replace all code with the function code above (Copy from Step 1)
2. **Runtime**: Node.js 22
3. **Entry point**: `verifyPassword` (this is the export from the module)

## Step 5: Set Environment Variables

1. Click **Runtime settings** (expand)
2. Under **Environment variables**, add:
    - **Name**: `HUBDS_PASSWORD_HASH`
    - **Value**: `$2b$10$T28tuMMHJiPS.tHekW/XEufWMBVRdp1r77fZBj8jK8J2xCuFch5J2`
3. Add another:
    - **Name**: `JWT_SECRET`
    - **Value**: `1TN49L6xAnOypGTqi41xGM3HNpZZEE9/YGIZTx8goso=`

## Step 6: Deploy

1. Click **Create**
2. Wait for deployment (2-3 minutes)
3. Should see **Green checkmark** when done

## Step 7: Get Function URL

1. After deployment, click on your function (e.g., `portfolioAccessControl`)
2. Go to **Trigger** tab
3. Copy the **Trigger URL** (looks like: `https://us-central1-sebgraph.cloudfunctions.net/portfolioAccessControl`)
4. The frontend Firebase SDK calls this automatically

## Verify Deployment

1. Go to Firebase Console → **Functions**
2. Should see `verifyPassword` with **Green/Running** status

---

## Next: Build & Deploy Site

```bash
cd /Users/sebastiangonzalez/Projects/Sebgraph
npm run build
# Upload /dist to cPanel
```

## Test in Production

1. Visit: `https://sebastiangonzalez.design/projects/password-page`
2. Enter password: `Portfolio2026!`
3. Should have access to `/projects/Hub`

---

## Your Credentials

-   **Password Hash**: `$2b$10$T28tuMMHJiPS.tHekW/XEufWMBVRdp1r77fZBj8jK8J2xCuFch5J2`
-   **JWT Secret**: `1TN49L6xAnOypGTqi41xGM3HNpZZEE9/YGIZTx8goso=`
-   **Test Password**: `Portfolio2026!`
