import React from "react";

const DestinationsContext = React.createContext({
    destinations: [], // Initialize destinations as an empty array
    setDestinations: () => { },
    addDestination: (destination) => { },
    editDestination: (id, newDestinationData) => { },
    deleteDestination: (id) => { }
});

export default DestinationsContext;