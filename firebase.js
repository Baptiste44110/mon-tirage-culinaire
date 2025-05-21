// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export db & auth
export { db, auth, provider, signInWithPopup, signOut, onAuthStateChanged };

// 🔄 Sauvegarde liée à l'utilisateur
export function sauvegarderPlatsFirebase(plats, user) {
  if (!user) throw new Error("Utilisateur non connecté");
  return set(ref(db, `plats/${user.uid}`), plats);
}

export function chargerPlatsFirebase(user) {
  if (!user) throw new Error("Utilisateur non connecté");
  return get(ref(db, `plats/${user.uid}`)).then((snap) => snap.exists() ? snap.val() : []);
}

// Connexion Google (popup)
export function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}

// Déconnexion
export function signOutUser() {
  return signOut(auth);
}

// Ecoute l’état de connexion
export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}
