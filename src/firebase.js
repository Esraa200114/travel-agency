// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "travel-agency-dashboard-a5621.firebaseapp.com",
    projectId: "travel-agency-dashboard-a5621",
    storageBucket: "travel-agency-dashboard-a5621.appspot.com",
    messagingSenderId: "771174932917",
    appId: "1:771174932917:web:5afb1739484a9cbc1679fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const deleteImageFromFirebaseStorage = (imageURL) => {

    // Split the URL by '/'
    const parts = imageURL.split('/');

    // Get the last part of the URL, which contains the filename and additional parameters
    const filenameWithParams = parts[parts.length - 1];

    // Split the filename by '?' to extract only the filename
    const [filename] = filenameWithParams.split('?');

    // Reference to the file you want to delete
    const fileRef = ref(storage, filename);

    // Delete the file
    deleteObject(fileRef)
        .then(() => {
            console.log(`${filename} was deleted successfully`);
        })
        .catch((error) => {
            console.error(`Error occurred in deleting file "${filename}":  ${error}`);
        });
};