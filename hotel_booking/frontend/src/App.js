import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/rooms" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/rooms" />} />
        <Route path="/rooms" element={token ? <Rooms /> : <Navigate to="/login" />} />
        <Route path="/reservations" element={token ? <Reservations /> : <Navigate to="/login" />} />
        <Route path="/booking" element={token ? <Booking /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
