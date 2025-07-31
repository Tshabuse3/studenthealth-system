import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navStyle = {
    background: "#004d40", // dark teal
    padding: "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    color: "white",
  };

  const navButton = {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    margin: "0 12px",
    transition: "color 0.3s",
  };

  const buttonHoverStyle = {
    color: "#b2dfdb", // light mint on hover
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", gap: "20px" }}>
        <button style={navButton} onClick={() => navigate("/")}>Home</button>
        <button style={navButton} onClick={() => navigate("/book-therapist")}>Book Therapist</button>
        <button style={navButton} onClick={() => navigate("/confidential-report")}>Confidential Report</button>
        <button style={navButton} onClick={() => navigate("/emergency-support")}>Emergency Support</button>
        <button style={navButton} onClick={() => navigate("/wellness-activities")}>Wellness Activities</button>
      </div>
      <div>
        <button
          style={{ ...navButton, border: "1px solid white", borderRadius: "4px", padding: "6px 12px" }}
          onClick={handleLogout}
          onMouseOver={(e) => (e.target.style.color = "#ffcccb")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
