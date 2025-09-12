const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({
    origin: [
        'https://sebastiangonzalez.design',
        'http://localhost:5173',
        'http://localhost:3000',
        'http://127.0.0.1:5173',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
})

// Initialize Firebase
admin.initializeApp()

// Import the verifyPassword function
const { verifyPassword } = require('./verifyPassword')

// Export as a callable function (original approach)
exports.verifyPassword = functions.https.onCall(async (data, context) => {
    // Simply pass through to your implementation
    return await verifyPassword(data, context)
})

// Export as HTTP function with explicit CORS support (backup approach)
exports.verifyPasswordHttp = functions.https.onRequest(async (req, res) => {
    // Handle CORS manually first
    res.set('Access-Control-Allow-Origin', req.headers.origin || '*')
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Accept'
    )
    res.set('Access-Control-Allow-Credentials', 'true')

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(204).send('')
        return
    }

    // Handle CORS with middleware as backup
    cors(req, res, async () => {
        try {
            if (req.method !== 'POST') {
                return res.status(405).json({ error: 'Method not allowed' })
            }

            const data = req.body
            const result = await verifyPassword(data, { auth: null })

            res.status(200).json(result)
        } catch (error) {
            console.error('HTTP function error:', error)
            res.status(500).json({
                error: 'Internal server error',
                details: error.message,
            })
        }
    })
})

// Log for debugging
functions.logger.log('Firebase Functions initialized')
