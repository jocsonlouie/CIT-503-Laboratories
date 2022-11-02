// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAx92pC_OFj0cVUNULoU_oZkKAqyWK6DSA",
    authDomain: "vuebase-project.firebaseapp.com",
    projectId: "vuebase-project",
    storageBucket: "vuebase-project.appspot.com",
    messagingSenderId: "47131040375",
    appId: "1:47131040375:web:af216e8f190446e0594472",
    measurementId: "G-9G0MD7S2RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;