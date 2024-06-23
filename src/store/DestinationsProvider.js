import React, { useState } from "react";
import DestinationsContext from "./destinations-context";

const DestinationsProvider = (props) => {

    // State for storing destinations data
    const [destinations, setDestinations] = useState([]);

    // Handlers for adding, editing, and deleting destinations

    const addDestinationHandler = (destination) => {

        // Add destination to destinations array
        setDestinations([...destinations, destination]);
    };

    
    const editDestinationHandler = (id, newDestinationData) => {

        // Find destination with given id and update its data
        setDestinations((prevDestinations) =>
            prevDestinations.map((destination) =>
                destination.id === id ? { ...destination, ...newDestinationData } : destination
            )
        );
    };    

    const deleteDestinationHandler = (id) => {

        // Remove destination with given id from destinations array
        setDestinations((prevDestinations) =>
            prevDestinations.filter((destination) => destination.id !== id)
        );
    };

    // Context value with destinations data and handlers
    const destinationsContext = {
        destinations: destinations,
        setDestinations: setDestinations,
        addDestination: addDestinationHandler,
        editDestination: editDestinationHandler,
        deleteDestination: deleteDestinationHandler
    };

    return (
        
        // Provide DestinationsContext with context value
        <DestinationsContext.Provider value={destinationsContext}>
            {/* Render children components */}
            {props.children}
        </DestinationsContext.Provider>
    );
};

export default DestinationsProvider;
