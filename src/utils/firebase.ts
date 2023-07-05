import { initializeApp } from '@firebase/app';
import { getMessaging, getToken, onMessage } from "@firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBmpGwpRYkbx0KsvF5O426xlh_5ximnXmo",
  authDomain: "childeducation.firebaseapp.com",
  projectId: "childeducation",
  storageBucket: "childeducation.appspot.com",
  messagingSenderId: "1083220080098",
  appId: "1:1083220080098:web:fad3aac5cac398d89af5bb",
  measurementId: "G-S6GKK55SL2"
};

export { getMessaging, getToken, onMessage }

export const firebaseApp = initializeApp(firebaseConfig);