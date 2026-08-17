import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
    getAuth, 
    signInAnonymously, 
    signInWithCustomToken, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider, 
    signInWithPopup, 
    sendPasswordResetEmail, 
    updateProfile
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc, 
    getDocs, 
    setDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot, 
    query, 
    where, 
    serverTimestamp, 
    initializeFirestore, 
    persistentLocalCache, 
    persistentMultipleTabManager, 
    increment
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVEn9oglei25Y_m1plr5f4ZYZ82_lnVr4",
    authDomain: "online-education-for-all.firebaseapp.com",
    projectId: "online-education-for-all",
    storageBucket: "online-education-for-all.firebasestorage.app",
    messagingSenderId: "239923576788",
    appId: "1:239923576788:web:b92ec2256ef3476a126041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db;
try {
    db = initializeFirestore(app, {
        localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
    });
} catch(e) {
    db = getFirestore(app);
}

const auth = getAuth(app);

// Global Window Attachments for Easy Access
window.FB = { app, auth, db };
window.FBFns = {
    collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, 
    onSnapshot, query, where, serverTimestamp, increment,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
    GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateProfile
};

export { 
    app, auth, db, 
    collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, 
    onSnapshot, query, where, serverTimestamp, increment,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
    GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateProfile 
};
