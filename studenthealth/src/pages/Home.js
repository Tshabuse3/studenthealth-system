import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "🏠 Home", path: "/" },
    { label: "📅 Book a Therapist", path: "/book-therapist" },
    { label: "📝 Confidential Report", path: "/confidential-report" },
    { label: "🚨 Emergency Support", path: "/emergency-support" },
    { label: "🧘 Wellness Activities", path: "/wellness-activities" },
    { label: "🔒 Logout", path: "/logout", highlight: true },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "280px",
          backgroundColor: "#e0f0ff",
          padding: "30px 20px",
          boxSizing: "border-box",
          borderRight: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "30px", color: "#2c3e50", fontWeight: "700", fontSize: "1.8rem", textAlign: "center" }}>
            MENU
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => navigate(item.path)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background: item.label.includes("🏠")
                    ? "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)"
                    : "transparent",
                  color: item.highlight ? "#d43f3a" : item.label.includes("🏠") ? "#fff" : "#2c3e50",
                  fontWeight: item.highlight ? "800" : item.label.includes("🏠") ? "700" : "600",
                  fontSize: "1.15rem",
                  boxShadow:
                    item.label.includes("🏠")
                      ? "0 4px 14px rgba(0, 255, 255, 0.5)"
                      : "none",
                  transition: "all 0.25s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  if (!item.label.includes("🏠")) {
                    e.currentTarget.style.background = "#b5dbff";
                    e.currentTarget.style.color = "#0a3d62";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 123, 255, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.label.includes("🏠")) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#2c3e50";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {/* Icon is part of label now */}
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ fontSize: "0.85rem", color: "#888", textAlign: "center", marginTop: "40px" }}>
          &copy; 2025 Student Health Dashboard
        </div>
      </aside>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "50px 60px",
          background:
            "linear-gradient(135deg, #f0f7ff 0%, #d9ebff 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.8rem",
            color: "#1b3a57",
            marginBottom: "15px",
            fontWeight: "800",
            animation: "fadeInDown 1.2s ease forwards",
            textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          Welcome to Your Student Health Dashboard
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            maxWidth: "650px",
            color: "#2c3e50",
            marginBottom: "30px",
            lineHeight: 1.7,
          }}
        >
          🌟 Empower yourself with easy access to mental health support, confidential reporting, emergency assistance, and wellness activities — all designed to keep you thriving and smiling every day! 😊💙 Let’s take this journey to wellness together!
        </p>
        <button
          onClick={() => navigate("/book-therapist")}
          style={{
            padding: "16px 36px",
            backgroundColor: "#1f78b4",
            color: "#fff",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 8px 16px rgba(31, 120, 180, 0.5)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#145a86";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1f78b4";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Book a Therapist Now
        </button>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            maxWidth: "1000px",
          }}
        >
          {/* Feature Cards with distinct gradient colors */}
          {[ 
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2913/2913603.png",
              title: "Expert Therapists",
              desc: "Connect with licensed professionals dedicated to your mental wellness.",
              bgGradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2913/2913626.png",
              title: "Confidential Reports",
              desc: "Share your concerns safely with guaranteed privacy and support.",
              bgGradient: "linear-gradient(135deg, #614385 0%, #516395 100%)",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1828/1828665.png",
              title: "Emergency Support",
              desc: "Immediate assistance when you need it the most.",
              bgGradient: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2621/2621240.png",
              title: "Wellness Activities",
              desc: "Engage in guided activities to boost your mind and body.",
              bgGradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
            },
          ].map(({ icon, title, desc, bgGradient }) => (
            <div
              key={title}
              style={{
                flex: "1 1 240px",
                background: bgGradient,
                borderRadius: "20px",
                padding: "30px 25px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                textAlign: "center",
                color: "#fff",
                fontWeight: "600",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
              }}
            >
              <img
                src={icon}
                alt={`${title} icon`}
                style={{
                  width: "70px",
                  marginBottom: "20px",
                  animation: "floatUpDown 3s ease-in-out infinite",
                  filter: "drop-shadow(0 0 2px rgba(0,0,0,0.25))",
                }}
              />
              <h3 style={{ marginBottom: "15px", fontWeight: "800", fontSize: "1.5rem" }}>
                {title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "rgba(255,255,255,0.9)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
