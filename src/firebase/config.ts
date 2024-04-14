import { initializeApp, getApps } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyCNfk8lZKED4OaMWg2EIkFGCjG2TBWa3vs",
  authDomain: "taskmanager-b9b2c.firebaseapp.com",
  databaseURL: "https://taskmanager-b9b2c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taskmanager-b9b2c",
  storageBucket: "taskmanager-b9b2c.appspot.com",
  messagingSenderId: "426182112190",
  appId: "1:426182112190:web:d2130e8c39f7d9759fffef"
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
