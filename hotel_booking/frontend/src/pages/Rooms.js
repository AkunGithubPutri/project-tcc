import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRooms(res.data);
      } catch (err) {
        console.error("Failed to fetch rooms", err);
      }
    };
    fetchRooms();
  }, [token]);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} - {room.type} - ${room.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
