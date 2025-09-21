// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYHB-Olmfm6LFucNj-XQ5StoBf0w46XeU",
  authDomain: "tradingportofolio-817e1.firebaseapp.com",
  databaseURL: "https://tradingportofolio-817e1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tradingportofolio-817e1",
  storageBucket: "tradingportofolio-817e1.firebasestorage.app",
  messagingSenderId: "672445665858",
  appId: "1:672445665858:web:20838d50d8adb52129d3db"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };
