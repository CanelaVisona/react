// Importa las funciones que necesitas del SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// La configuración de Firebase para tu app web
const firebaseConfig = {
  apiKey: "AIzaSyAGxvV_f5EfVAa8Y6bKJsUhMo5PyrnKV8Y",
  authDomain: "vamosche-28553.firebaseapp.com",
  projectId: "vamosche-28553",
  storageBucket: "vamosche-28553.appspot.com",
  messagingSenderId: "891471478916",
  appId: "1:891471478916:web:a9bb9db003e7b8d85d42d1",
  measurementId: "G-EFX78Z8WP3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Si estás usando Analytics, inicialízalo
const analytics = getAnalytics(app);

// Inicializa Firestore (Base de datos)
const db = getFirestore(app);

// Exporta la base de datos para usarla en otros archivos
export { db };
