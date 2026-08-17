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
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
