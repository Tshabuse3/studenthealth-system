
import React, { useState } from "react";
const ConfidentialReport = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    studentNumber: "",
    issueType: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Report:", formData);
    setSubmitted(true);
    // In a real app, securely send this to backend
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "600px",
        margin: "40px auto",
        backgroundColor: "#fefefe",
        borderRadius: "12px",
        boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ color: "#d32f2f", textAlign: "center", marginBottom: "8px" }}>
        🛡️ Confidential Student Report
      </h2>
      <p style={{ color: "#555", fontSize: "16px", textAlign: "center", marginBottom: "25px" }}>
        Please fill in this form with complete confidentiality. Only authorized staff will view your report.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1.8px solid #ccc",
            fontSize: "16px",
            outlineColor: "#d32f2f",
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#d32f2f")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <input
          type="text"
          name="studentNumber"
          placeholder="Student Number"
          value={formData.studentNumber}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1.8px solid #ccc",
            fontSize: "16px",
            outlineColor: "#d32f2f",
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#d32f2f")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <select
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1.8px solid #ccc",
            fontSize: "16px",
            backgroundColor: "#fff",
            color: formData.issueType ? "#000" : "#888",
            outlineColor: "#d32f2f",
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#d32f2f")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        >
          <option value="" disabled>
            -- Select Issue Type --
          </option>
          <option value="Mental Health">Mental Health</option>
          <option value="Bullying">Bullying</option>
          <option value="Academic Pressure">Academic Pressure</option>
          <option value="Abuse or Violence">Abuse or Violence</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="description"
          rows="5"
          placeholder="Describe the issue in detail..."
          value={formData.description}
          onChange={handleChange}
          required
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1.8px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
            outlineColor: "#d32f2f",
            transition: "border-color 0.3s ease",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#d32f2f")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "#d32f2f",
            color: "white",
            padding: "14px",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(211,47,47,0.6)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#b71c1c")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#d32f2f")}
        >
          Submit Report
        </button>
      </form>

      {submitted && (
        <p
          style={{
            color: "green",
            marginTop: "20px",
            fontWeight: "600",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          ✅ Your report has been submitted securely. Thank you.
        </p>
      )}
    </div>
  );
};

export default ConfidentialReport;
