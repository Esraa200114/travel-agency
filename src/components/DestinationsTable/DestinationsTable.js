import React, { useContext } from "react";

// Import For Context
import DestinationsContext from "../../store/destinations-context";

// Imports For Components
import DestinationForm from "../DestinationForm/DestinationForm";
import DeleteDestination from "../DeleteDestination/DeleteDestination";

// Imports For Styling
import "./DestinationsTable.css";

const DestinaionsTable = () => {

    const ctx = useContext(DestinationsContext);

    return (
        <table className="table table-responsive" id="example">
            <thead>
                <tr className="destinations-table-header">
                    <th className="p-3 fs-5 text-center" scope="col">Image</th>
                    <th className="p-3 fs-5 text-center" scope="col">Index</th>
                    <th className="p-3 fs-5 text-center" scope="col">City</th>
                    <th className="p-3 fs-5 text-center" scope="col">Rating</th>
                    <th className="p-3 fs-5 text-center" scope="col">Side</th>
                    <th className="p-3 fs-5 text-center" scope="col">Starting Date</th>
                    <th className="p-3 fs-5 text-center" scope="col">Ending Date</th>
                    <th className="p-3 fs-5 text-center" scope="col">Description</th>
                    <th className="p-3 fs-5 text-center" scope="col">Added to Favourites</th>
                    <th className="p-3 fs-5 text-center" colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>{
                ctx.destinations.map((destination, index) => (
                    <tr key={destination.id}>
                        <td className="text-center">{index}</td>
                        <td className="text-center"><img src={destination.image} alt="Destination Image" width="60px" height="50px" /></td>
                        <td className="text-center">{destination.city}</td>
                        <td className="text-center">{destination.rating}</td>
                        <td className="text-center">{destination.side}</td>
                        <td className="text-center">{destination.startingDate}</td>
                        <td className="text-center">{destination.endingDate}</td>
                        <td className="text-center">{destination.description}</td>
                        <td className="text-center">{destination.isFavourite ? "Yes" : "No"}</td>
                        <td>
                            <DestinationForm isEditing={true} destination={destination} />
                        </td>
                        <td>
                            <DeleteDestination destination={destination} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DestinaionsTable;