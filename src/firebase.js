// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB001tng30TuFfCL69pkiljDWNbgfT70XM",
authDomain: "chat-app-c4648.firebaseapp.com",
projectId: "chat-app-c4648",
storageBucket: "chat-app-c4648.appspot.com",
messagingSenderId: "463055964626",
appId: "1:463055964626:web:a320ca8099597d9ffe200b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);