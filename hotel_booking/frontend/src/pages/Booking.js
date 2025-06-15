import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Booking = () => {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "", email: "", room_type: "", checkin: "", checkout: "",
  });
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/booking", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, [token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/booking/${editingId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/booking", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setForm({ name: "", email: "", room_type: "", checkin: "", checkout: "" });
      fetchBookings();
    } catch (err) {
      alert("Booking failed");
    }
  };

  const handleEdit = (booking) => {
    setForm(booking);
    setEditingId(booking.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/booking/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBookings();
  };

  return (
    <div>
      <h2>{editingId ? "Edit" : "Create"} Booking</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <input name="room_type" placeholder="Room Type" value={form.room_type} onChange={handleChange} required /><br />
        <input name="checkin" type="date" value={form.checkin} onChange={handleChange} required /><br />
        <input name="checkout" type="date" value={form.checkout} onChange={handleChange} required /><br />
        <button type="submit">{editingId ? "Update" : "Book"}</button>
      </form>

      <h2>All Bookings</h2>
      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.name} | {b.email} | {b.room_type} | {b.checkin} - {b.checkout}
            <button onClick={() => handleEdit(b)}>Edit</button>
            <button onClick={() => handleDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
