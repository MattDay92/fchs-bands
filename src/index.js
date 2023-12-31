import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCcl8cyPYl_kuWJwb_jckqfXwbrqnCRSPQ",
  authDomain: "fchs-bands.firebaseapp.com",
  projectId: "fchs-bands",
  storageBucket: "fchs-bands.appspot.com",
  messagingSenderId: "449673214853",
  appId: "1:449673214853:web:0b612b28f8da4f33cae2ec",
  measurementId: "G-NKGCB1BWLM", 
  databaseURL:  "https://fchs-bands-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)
const database = getDatabase(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App storage={storage} database={database} />
  </React.StrictMode>
);

