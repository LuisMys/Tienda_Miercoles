// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ2l4xrxSQCnH-ZECCoFKFaoGq4Wv6k24",
  authDomain: "luismigueltiendacesde.firebaseapp.com",
  projectId: "luismigueltiendacesde",
  storageBucket: "luismigueltiendacesde.appspot.com",
  messagingSenderId: "573252931788",
  appId: "1:573252931788:web:96cf69af5c86238e6ab269",
  measurementId: "G-PDRKL836N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);