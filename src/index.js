import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCcl8cyPYl_kuWJwb_jckqfXwbrqnCRSPQ",
  authDomain: "fchs-bands.firebaseapp.com",
  projectId: "fchs-bands",
  storageBucket: "fchs-bands.appspot.com",
  messagingSenderId: "449673214853",
  appId: "1:449673214853:web:0b612b28f8da4f33cae2ec",
  measurementId: "G-NKGCB1BWLM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

