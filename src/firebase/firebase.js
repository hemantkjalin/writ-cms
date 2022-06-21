// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNH3jA0eEfdBh50otjyAz1vog67UihIiM",
  authDomain: "writ-labs-cms.firebaseapp.com",
  projectId: "writ-labs-cms",
  storageBucket: "writ-labs-cms.appspot.com",
  messagingSenderId: "402102136248",
  appId: "1:402102136248:web:55da2b6261ee662a45b34d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
// const addContact = async ({ name, email, phone, subject, message }) => {
//     try {
//       const docRef = await addDoc(collection(db, "contact_us"), {
//         name: name,
//         email: email,
//         phone: phone,
//         subject: subject,
//         message: message,
//       });
//       console.log("Contact details submitted");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };
//   export const addPost = async ({ letter }) => {
//     try {
//       const docRef = await addDoc(collection(db, "news_letter"), {
//         email: letter,
//       });
//       console.log("Newsletter Email Submitted");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };
