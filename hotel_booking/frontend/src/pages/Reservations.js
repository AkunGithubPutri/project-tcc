import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Reservations = () => {
  const { token } = useContext(AuthContext);
  const [customer_name, setCustomerName] = useState("");
  const [room_id, setRoomId] = useState("");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRooms(res.data);
      } catch (err) {
        console.error("Failed to load rooms", err);
      }
    };
    fetchRooms();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reservations", {
        customer_name,
        room_id,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Reservation created");
      setCustomerName("");
      setRoomId("");
    } catch (err) {
      alert("Failed to create reservation");
    }
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customer_name}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        /><br />
        <select value={room_id} onChange={(e) => setRoomId(e.target.value)} required>
          <option value="">Select Room</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name} - {room.type}
            </option>
          ))}
        </select><br />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservations;
