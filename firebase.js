// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-943c8.firebaseapp.com",
  projectId: "twitter-943c8",
  storageBucket: "twitter-943c8.appspot.com",
  messagingSenderId: "429110521778",
  appId: "1:429110521778:web:b138a5d778e00310efbeab"
};

// Initialize Firebase
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app,db,storage}