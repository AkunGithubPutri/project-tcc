import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      {token ? (
        <>
          <Link to="/rooms" style={{ marginRight: "10px" }}>Rooms</Link>
          <Link to="/reservations" style={{ marginRight: "10px" }}>Reservations</Link>
          <Link to="/booking" style={{ marginRight: "10px" }}>Booking</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
