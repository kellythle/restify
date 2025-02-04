import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Profile from "./components/EditProfile";
import Notifications from "./components/Notifications";
// import Properties from "./components/Properties";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import HostsReservations from "./pages/HostsReservations";
import GuestsReservations from "./pages/GuestsReservations";
import ReservationRequest from "./pages/ReservationRequester";
import CreateProperty from "./pages/CreateProperty";
import EditProperty from "./pages/EditProperty";
import PropertySearch from "./components/PropertySearch";
import HostProperty from "./pages/HostProperties";
import Logout from "./components/LogOut";

const accessToken = localStorage.getItem("access");

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<PropertySearch />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route
                        path="/profile"
                        element={<Profile token={accessToken} />}
                    />
                    <Route path="/properties" element={<Properties />} />
                    <Route
                        path="/hostsreservations"
                        element={<HostsReservations />}
                    />
                    <Route
                        path="/guestsreservations"
                        element={<GuestsReservations />}
                    />
                    <Route
                        path="/requestreservation/:propID"
                        element={<ReservationRequest />}
                    />
                    <Route path="/search" element={<PropertySearch />} />
                    <Route
                        path="/properties/getproperty/:propID"
                        element={<PropertyDetail />}
                    />
                    <Route
                        path="properties/createproperty"
                        element={<CreateProperty />}
                    />
                    <Route
                        path="properties/editproperty/:propID"
                        element={<EditProperty />}
                    />
                    <Route
                        path="properties/hostproperties"
                        element={<HostProperty />}
                    />

                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
