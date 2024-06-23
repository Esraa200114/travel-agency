// Imports Related To React
import { useContext } from "react";

// Imports For Icons
import { IoArrowBack } from "react-icons/io5";

// Imports Related to React Router
import { useNavigate } from "react-router-dom";

// Imports For Context
import DestinationsContext from "../../store/destinations-context";

// Imports For Components
import DestinationsTable from "../../components/DestinationsTable/DestinationsTable";
import Toast from "../../components/Toast/Toast";

// Imports For Styling
import "./Dashboard.css";
import DestinationForm from "../../components/DestinationForm/DestinationForm";

const Dashboard = () => {

    const ctx = useContext(DestinationsContext);
    const navigate = useNavigate();

    const navigateToLandingPage = () => {
        navigate("/");
    };

    let content = "";

    if (ctx.destinations.length === 0) {
        content = <div className="container d-flex justify-content-center align-items-center">
            <p className="no-data-text text-center fw-bold my-5">No Destinations Found.</p>
        </div>
    } else {
        content = <DestinationsTable />
    }

    return (
        <section>
            <div className="col-11 mx-auto">
                <div className="destinations-table container-fluid my-5 py-4 px-4">
                    <div className="row mb-5">
                        <div className="back-arrow col-1 d-flex justify-content-center align-items-center">
                            <IoArrowBack size={40} className="me-5" color="#333333" onClick={navigateToLandingPage} />
                        </div>
                        <div className="col-11 d-flex align-items-center justify-content-center">
                            <h1 className="dashboard-heading mb-0 fw-bold">Dashboard</h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <h3 className="table-name py-3 mb-0">Destinations Data Table</h3>
                        <DestinationForm isEditing={false} destination={{}}/>
                    </div>
                    {content}
                </div>
            </div>
            <Toast />
        </section >
    );
}

export default Dashboard;