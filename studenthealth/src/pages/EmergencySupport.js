import React from "react";

const EmergencySupport = () => {
  const emergencyContacts = [
    {
      name: "Campus Security",
      phone: "012 345 6789",
      description: "Available 24/7 for any on-campus emergencies",
      bg: "#f44336",
    },
    {
      name: "Mental Health Hotline",
      phone: "0800 567 789",
      description: "Speak to a counselor anonymously anytime",
      bg: "#4caf50",
    },
    {
      name: "Gender-Based Violence Support",
      phone: "0800 428 428",
      description: "Free confidential support for GBV-related emergencies",
      bg: "#9c27b0",
    },
  ];

  const handlePanicClick = () => {
    alert("🚨 Panic Alert Sent! Help is on the way.");
    // In a real app, trigger backend or alert services here
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h2 style={{ color: "#d32f2f" }}>🚨 Emergency Support</h2>
      <p style={{ fontSize: "16px" }}>
        If you or someone else is in immediate danger, please use the contact
        details below or press the panic button.
      </p>

      <button
        onClick={handlePanicClick}
        style={{
          backgroundColor: "#d32f2f",
          color: "white",
          padding: "12px 20px",
          margin: "15px 0",
          fontWeight: "bold",
          fontSize: "18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🔴 Panic Button
      </button>

      {emergencyContacts.map((contact, index) => (
        <div
          key={index}
          style={{
            backgroundColor: contact.bg,
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <h3>{contact.name}</h3>
          <p>{contact.description}</p>
          <p>
            📞 <strong>{contact.phone}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default EmergencySupport;
