// Import des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfEuAqQ7QaKLPHWmOeokKiq7UmtZUvRfk",
  authDomain: "tirage-au-sort-culinaire.firebaseapp.com",
  databaseURL: "https://tirage-au-sort-culinaire-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tirage-au-sort-culinaire",
  storageBucket: "tirage-au-sort-culinaire.firebasestorage.app",
  messagingSenderId: "22284347001",
  appId: "1:22284347001:web:d402b190f8c91e70fc56a8"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Fonctions utilitaires

// Sauvegarder la liste des plats
export function sauvegarderPlatsFirebase(plats, userId = "default_user") {
  return set(ref(db, `plats/${userId}`), plats);
}

// Charger la liste des plats
export function chargerPlatsFirebase(userId = "default_user") {
  return get(ref(db, `plats/${userId}`)).then(snapshot => {
    return snapshot.exists() ? snapshot.val() : [];
  });
}
