import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/feedback", form);

      setStatus("feedback subited successfully");
      setForm({ name: "", email: "", password: "", message: "" });
    } catch (err) {
      setStatus("Faied to submit feedback");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>
          Submit
        </button>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
}

export default FeedbackForm;
