// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCE2ElbAMMhXyRdlBbonsi4lfg4yByVPGg",
  authDomain: "the-bro-chat.firebaseapp.com",
  projectId: "the-bro-chat",
  storageBucket: "the-bro-chat.firebasestorage.app",
  messagingSenderId: "315017432874",
  appId: "1:315017432874:web:361bb63cb644af992ed853"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
