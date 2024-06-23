// Imports Related To React
import React, { useEffect, useContext } from 'react';

// Imports Related to React Router
import { Routes, Route } from "react-router-dom";

// Imports Related To Firestore
import { collection, onSnapshot } from "firebase/firestore";

// Imports Related to Firebase
import { db } from "./firebase.js";

// Imports For Components
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

// Import For Context
import DestinationsContext from './store/destinations-context.js';

// Imports For Styling
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css';

function App() {

  const ctx = useContext(DestinationsContext);

  useEffect(() => {

    const unsub = onSnapshot(collection(db, "destinations"), (snapShot) => {

      let destinationsList = [];
      snapShot.docs.forEach(doc => { destinationsList.push({ id: doc.id, ...doc.data() }) });
      ctx.setDestinations(destinationsList);

    }, (error) => { console.log(error); });

    // A cleanup function to prevent memory leak.
    return () => { unsub(); };

  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
