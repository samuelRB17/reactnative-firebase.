import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDCIQ5JNcoceHkHE5hd8DU2gKqSHC8Q-Ds",
  authDomain: "api-game-of-thrones.firebaseapp.com",
  projectId: "api-game-of-thrones",
  storageBucket: "api-game-of-thrones.firebasestorage.app",
  messagingSenderId: "766456968170",
  appId: "1:766456968170:web:cf25ff8111e85605457893"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };