import { useContext } from "react";

// Imports Related to Firestore
import { collection, doc, setDoc, addDoc, deleteDoc } from "firebase/firestore";

// Imports Related To Firebase
import { db, deleteImageFromFirebaseStorage } from "../../firebase";

// Import For Context
import DestinationsContext from "../../store/destinations-context";

// Imports For Components
import { showFailureToast, showSuccessToast } from "../../components/Toast/Toast";

export const useDestinationHandlers = () => {

    const ctx = useContext(DestinationsContext);

    const addDestinationHandler = async (newDestination) => {
        try {
            const docRef = await addDoc(collection(db, "destinations"), newDestination);
            ctx.addDestination({ id: docRef.id, ...newDestination });
            showSuccessToast("Destination added successfully!");
        } catch (err) {
            console.log(err);
            showFailureToast("Failed to add destination: Unable to add destination. Please try again later.")
        }
    };

    const editDestinationHandler = async (editedDestination, destinationDocumentID) => {
        try {
            await setDoc(doc(db, "destinations", destinationDocumentID), editedDestination);
            ctx.editDestination(destinationDocumentID, editedDestination);
            showSuccessToast("Destination updated successfully!");
        } catch (err) {
            console.log(err);
            showFailureToast("Failed to update destination: Unable to update destination. Please try again later.")
        }
    };

    const deleteDestinationHandler = async (destinationDocumentID) => {
        try {
            const destination = ctx.destinations.find((destination) => destination.id === destinationDocumentID);
            if (destination) {
                const imageURL = destination.image;
                deleteImageFromFirebaseStorage(imageURL);
            } else {
                console.log("Destination not found in context.");
            }
            await deleteDoc(doc(db, "destinations", destinationDocumentID));
            ctx.deleteDestination(destinationDocumentID);
            showSuccessToast("Destination deleted successfully!");
        } catch (error) {
            console.log(error);
            showFailureToast("Failed to delete destination: Unable to delete destination. Please try again later.")
        }
    };

    return { addDestinationHandler, editDestinationHandler, deleteDestinationHandler };
};
