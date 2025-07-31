import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const fakeLoginApi = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email.trim() !== "" && password.trim() !== "") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fakeLoginApi(email, password);
      if (response.success) {
        login();
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "35px 30px",
          backgroundColor: "#ffffffcc", // slight transparency for softness
          borderRadius: "18px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            marginBottom: "28px",
            color: "#2c3e50",
            fontWeight: "700",
            fontSize: "2.3rem",
            userSelect: "none",
          }}
        >
          👋 Welcome to    Student Health!💙✨
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "14px 16px",
              width: "100%",
              marginBottom: "22px",
              borderRadius: "12px",
              border: "2px solid #a3c9f1",
              fontSize: "1.05rem",
              outline: "none",
              transition: "border-color 0.4s ease, background-color 0.4s ease",
              backgroundColor: "#f0f9ff",
              color: "#1b3a57",
              boxShadow: "inset 2px 2px 5px #c8e0ff",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#4096f6";
              e.currentTarget.style.backgroundColor = "#e3f2ff";
              e.currentTarget.style.boxShadow = "inset 2px 2px 8px #82b1ff";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#a3c9f1";
              e.currentTarget.style.backgroundColor = "#f0f9ff";
              e.currentTarget.style.boxShadow = "inset 2px 2px 5px #c8e0ff";
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "14px 16px",
              width: "100%",
              marginBottom: "22px",
              borderRadius: "12px",
              border: "2px solid #a3c9f1",
              fontSize: "1.05rem",
              outline: "none",
              transition: "border-color 0.4s ease, background-color 0.4s ease",
              backgroundColor: "#f0f9ff",
              color: "#1b3a57",
              boxShadow: "inset 2px 2px 5px #c8e0ff",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#4096f6";
              e.currentTarget.style.backgroundColor = "#e3f2ff";
              e.currentTarget.style.boxShadow = "inset 2px 2px 8px #82b1ff";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#a3c9f1";
              e.currentTarget.style.backgroundColor = "#f0f9ff";
              e.currentTarget.style.boxShadow = "inset 2px 2px 5px #c8e0ff";
            }}
          />

          {error && (
            <div
              style={{
                color: "#d43f3a",
                marginBottom: "20px",
                fontWeight: "600",
                userSelect: "none",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px 0",
              backgroundColor: loading ? "#8ab6ff" : "#4096f6",
              color: "#fff",
              fontSize: "1.3rem",
              fontWeight: "700",
              border: "none",
              borderRadius: "14px",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading
                ? "none"
                : "0 10px 25px rgba(64, 150, 246, 0.7)",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#2c74d6";
                e.currentTarget.style.boxShadow = "0 14px 35px rgba(44, 116, 214, 0.8)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#4096f6";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(64, 150, 246, 0.7)";
              }
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
