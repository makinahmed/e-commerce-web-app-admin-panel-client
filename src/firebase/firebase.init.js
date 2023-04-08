import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";

const firebaseConfig = {
  apiKey: "AIzaSyAuy1hbfq6B01goZsaHEfrgJghruSk4rSQ",
  authDomain: "e-commerce-admin-app-e573f.firebaseapp.com",
  projectId: "e-commerce-admin-app-e573f",
  storageBucket: "e-commerce-admin-app-e573f.appspot.com",
  messagingSenderId: "107318218077",
  appId: "1:107318218077:web:3b6eb6a5b6a3429c366cb4",
};

export const initilizeFirebaseApp = () => initializeApp(firebaseConfig);
