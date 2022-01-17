// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCqvVvhmBBB5oz_oT7S9ejFG6v1WN4j-bk',
    authDomain: 'blog-699c1.firebaseapp.com',
    projectId: 'blog-699c1',
    storageBucket: 'blog-699c1.appspot.com',
    messagingSenderId: '348735112280',
    appId: '1:348735112280:web:4db4cbf87a496418dfb62d',
    measurementId: 'G-Y95WR62NPS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
