import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCKCP6lMWyIIWAnS_ZO4ExAsYg68Emg2M",
  authDomain: "tora-shops.firebaseapp.com",
  projectId: "tora-shops",
  storageBucket: "tora-shops.firebasestorage.app",
  messagingSenderId: "176148409390",
  appId: "1:176148409390:web:0cb6486b3db7f07ad9c3bf",
  measurementId: "G-NSXMZ559G6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
