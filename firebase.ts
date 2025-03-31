import { initializeApp, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import {
    getFunctions,
    Functions,
    connectFunctionsEmulator,
} from 'firebase/functions'

// More detailed logging to help debug environment variable issues
console.log('Firebase environment loading status:', {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'defined' : 'missing',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
        ? 'defined'
        : 'missing',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'defined' : 'missing',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
        ? 'defined'
        : 'missing',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
        ? 'defined'
        : 'missing',
    appId: import.meta.env.VITE_FIREBASE_APP_ID ? 'defined' : 'missing',
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
        ? 'defined'
        : 'missing',
})

// Check if essential variables are missing
if (!import.meta.env.VITE_FIREBASE_PROJECT_ID) {
    console.error(
        'CRITICAL: Firebase project ID is missing from environment variables!'
    )
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
let app: FirebaseApp | undefined
let db: Firestore | undefined
let functions: Functions | undefined

try {
    // Initialize only if we have essential configuration
    if (firebaseConfig.projectId) {
        app = initializeApp(firebaseConfig)
        db = getFirestore(app)
        functions = getFunctions(app)

        console.log(
            `Firebase initialized successfully with project ID: ${firebaseConfig.projectId}`
        )

        // Connect to emulator in development mode if needed
        const isLocalDev =
            window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1'

        if (
            isLocalDev &&
            import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true' &&
            functions
        ) {
            console.log('Development mode: Connecting to Firebase emulators')
            connectFunctionsEmulator(functions, 'localhost', 5001)
        }
    } else {
        throw new Error('Missing essential Firebase configuration')
    }
} catch (error) {
    console.error('Failed to initialize Firebase:', error)
    // Provide fallback for testing/development if needed
}

export { app, db, functions }
