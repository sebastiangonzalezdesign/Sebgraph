const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Initialize Firebase
admin.initializeApp()

// Import the verifyPassword function
const { verifyPassword } = require('./verifyPassword')

// Export as a callable function
exports.verifyPassword = functions.https.onCall(async (data, context) => {
    // Simply pass through to your implementation
    return await verifyPassword(data, context)
})

// Log for debugging
functions.logger.log('Firebase Functions initialized')
