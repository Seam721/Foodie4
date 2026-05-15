// ==========================
// Firebase Imports (FIXED VERSION)
// ==========================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


// ==========================
// Firebase Config
// ==========================
const firebaseConfig = {
    apiKey: "AIzaSyANPWaFfEFj5nshRaFoxCMAOjVwE3wbt-A",
    authDomain: "foodie-website-b4887.firebaseapp.com",
    projectId: "foodie-website-b4887",
    storageBucket: "foodie-website-b4887.firebasestorage.app",
    messagingSenderId: "531327100872",
    appId: "1:531327100872:web:15c81a528d6749152b02fd",
    measurementId: "G-6NBX4WT371"
};


// ==========================
// Initialize Firebase
// ==========================
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// ==========================
// WAIT FOR HTML TO LOAD
// ==========================
window.addEventListener("DOMContentLoaded", () => {

    const googleLoginBtn = document.getElementById("googleLogin");

    if (!googleLoginBtn) {
        console.error("❌ Button #googleLogin not found in HTML");
        return;
    }

    googleLoginBtn.addEventListener("click", async () => {

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            console.log("Login success:", user);

            alert(`Welcome ${user.displayName}`);

        } catch (error) {
            console.error("Login error:", error.code, error.message);
            alert(error.message);
        }

    });

});