import React, { useState } from "react";

const therapistTypes = [
  {
    label: "Clinical Psychologist",
    color: "#6a1b9a",
    subTypes: [
      "Child Psychology",
      "Cognitive Behavioral Therapy",
      "Neuropsychology",
      "Health Psychology",
    ],
  },
  {
    label: "Social Worker",
    color: "#2e7d32",
    subTypes: [
      "Community Support",
      "Crisis Intervention",
      "Family Counseling",
      "Substance Abuse",
    ],
  },
  {
    label: "Academic Psychologist",
    color: "#1565c0",
    subTypes: [
      "Study Skills Coaching",
      "Motivational Counseling",
      "Exam Anxiety Support",
      "Learning Disabilities",
    ],
  },
  {
    label: "Wellness Coach",
    color: "#e65100",
    subTypes: [
      "Stress Management",
      "Fitness and Mental Health",
      "Sleep Coaching",
      "Nutrition Support",
    ],
  },
];

const BookTherapist = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubType, setSelectedSubType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    reason: "",
    day: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedSubType("");
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can send this data to a server/backend here
    console.log({ ...formData, therapistType: selectedType.label, selectedSubType });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📘 Book a Therapist</h1>
      <p style={styles.subtext}>Choose a therapist category suitable for your needs:</p>

      <div style={styles.cardContainer}>
        {therapistTypes.map((type) => (
          <div
            key={type.label}
            onClick={() => handleTypeClick(type)}
            style={{
              ...styles.card,
              backgroundColor: type.color,
              border: selectedType?.label === type.label ? "4px solid white" : "2px solid #ccc",
            }}
          >
            <h3 style={styles.cardTitle}>{type.label}</h3>
          </div>
        ))}
      </div>

      {selectedType && (
        <div style={styles.detailsContainer}>
          <h2 style={styles.detailsTitle}>Choose a Specialty:</h2>
          <select
            style={styles.select}
            value={selectedSubType}
            onChange={(e) => setSelectedSubType(e.target.value)}
            required
          >
            <option value="">-- Select Therapy Sub-Type --</option>
            {selectedType.subTypes.map((spec, i) => (
              <option key={i} value={spec}>
                {spec}
              </option>
            ))}
          </select>

          <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>
              Please enter your details:
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              name="reason"
              placeholder="Briefly describe your issue or concern"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="4"
              style={styles.textarea}
            />

            <label style={styles.label}>Preferred Day</label>
            <select
              name="day"
              value={formData.day}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">-- Select Day --</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </select>

            <label style={styles.label}>Preferred Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <button type="submit" style={styles.button}>Submit Booking</button>

            {submitted && (
              <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
                ✅ Your appointment request has been submitted!
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f6f8",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "900px",
    margin: "50px auto",
    fontFamily: "Segoe UI, sans-serif",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    color: "#222",
    marginBottom: "10px",
  },
  subtext: {
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "30px",
  },
  card: {
    flex: "1 1 200px",
    minWidth: "200px",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    color: "white",
    textAlign: "center",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
  },
  detailsTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
  },
  input: {
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  label: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "5px",
    color: "#444",
  },
  button: {
    padding: "12px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default BookTherapist;
