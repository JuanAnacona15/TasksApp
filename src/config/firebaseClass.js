import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, onValue } from "firebase/database";

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
const db = getDatabase(app);

class FirebaseService {
  constructor(db) {
    this.db = db;
  }

  async set(path, data) {
    const refPath = ref(this.db, path);
    await set(refPath, data);
  }

  async get(path) {
    let data;
    const dataRef = ref(this.db, path);
    await onValue(dataRef, (snapshot) => {
      data = snapshot.val();
    });
    return data;
  }
  

  async update(path, data) {
    const refPath = ref(this.db, path);
    await update(refPath, data);
  }
}

const firebaseService = new FirebaseService(db);

export default firebaseService;

