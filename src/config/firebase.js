// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0G7SV1MRTjMkM_eNw4r1RRVWc756uQMk",
  authDomain: "finalolx-e3a7c.firebaseapp.com",
  projectId: "finalolx-e3a7c",
  storageBucket: "finalolx-e3a7c.appspot.com",
  messagingSenderId: "943189347716",
  appId: "1:943189347716:web:3888e3c96418df6239a1d1",
  measurementId: "G-YYRFWG8Q2R",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

async function sendImageToStorege(image) {
  try {
    const imagesRef = ref(storage, "olximages/" + image.name);
    await uploadBytes(imagesRef, image);
    const url = getDownloadURL(imagesRef);
    return url;
  } catch (e) {
    console.log(e.message);
  }
}

export { sendImageToStorege };
