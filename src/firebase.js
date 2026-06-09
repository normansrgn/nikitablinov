import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOmyhH508HaNcj8_wNjWZoQUXdeqFFY38",
  authDomain: "fkkrasnodar-d5172.firebaseapp.com",
  projectId: "fkkrasnodar-d5172",
  storageBucket: "fkkrasnodar-d5172.firebasestorage.app",
  messagingSenderId: "831821631214",
  appId: "1:831821631214:web:c0c3475504478d4ad86dff",
  measurementId: "G-N6S3PCY99Y"
};

const app = initializeApp(firebaseConfig);

export default app;