// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAFsou5f2SYHcf12aQnXjRhZ1MVLhNtCpk',
    authDomain: 'portfolio-access-control.firebaseapp.com',
    projectId: 'portfolio-access-control',
    storageBucket: 'portfolio-access-control.appspot.com',
    messagingSenderId: '33230428688',
    appId: '1:33230428688:web:1baf99cfea2b892c768895',
    measurementId: 'G-T39HMTQHH2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)
const db = getFirestore(app) // Initialize Firestore

// Export the db reference
export { db }
