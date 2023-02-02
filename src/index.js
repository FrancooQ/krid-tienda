import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4V5SeC1UVTkl1wC8MGnXJ_YCBlP3Y-o0",
  authDomain: "krid-coderhouse.firebaseapp.com",
  projectId: "krid-coderhouse",
  storageBucket: "krid-coderhouse.appspot.com",
  messagingSenderId: "695324941863",
  appId: "1:695324941863:web:5a621609505890a26b7802"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

