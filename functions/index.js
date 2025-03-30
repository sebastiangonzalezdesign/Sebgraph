const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Initialize Firebase - make sure this happens before importing any modules that use admin
admin.initializeApp()

// Import the verifyPassword function
const { verifyPassword } = require('./verifyPassword')

// Export as an HTTP callable function
exports.verifyPassword = functions.https.onCall(verifyPassword)
