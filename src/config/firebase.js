import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDngNH0FX-LDgXQnkbs7SWWbh7Qg_f60LI",
  authDomain: "folkloric-air-401720.firebaseapp.com",
  databaseURL: "https://folkloric-air-401720-default-rtdb.firebaseio.com",
  projectId: "folkloric-air-401720",
  storageBucket: "folkloric-air-401720.appspot.com",
  messagingSenderId: "515222041738",
  appId: "1:515222041738:web:6d1b8151bbb9cbe3ada973"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

