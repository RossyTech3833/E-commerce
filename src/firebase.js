import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseconfig = {
    apiKey: "AIzaSyAnWEVGD-pPYrig79_-u5uEaO61QBOR6sY",
    authDomain: "e-commerce-d9c85.firebaseapp.com",
    projectId: "e-commerce-d9c85",
    StorageBucket: "e-commerce-d9c85.firebasestorage.app",
    messagingSenderId: "690298798197",
    appId: "1:690298798197:web:5209ca8e067c7e83a0f83c",
}


const app = initializeApp(firebaseconfig)
export const auth = getAuth(app)
export const db = getFirestore(app); // ⬅️ export Firestore