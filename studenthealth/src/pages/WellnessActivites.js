import React, { useState } from "react";

const activities = [
  {
    id: "meditation",
    icon: "🧘",
    title: "Meditation",
    description:
      "Practice mindfulness and breathing techniques to reduce stress and improve mental clarity.",
  },
  {
    id: "art-therapy",
    icon: "🎨",
    title: "Art Therapy",
    description:
      "Express your emotions creatively through drawing, painting, and other art forms.",
  },
  {
    id: "music-therapy",
    icon: "🎧",
    title: "Music Therapy",
    description:
      "Engage with music to enhance your emotional well-being and relaxation.",
  },
  {
    id: "journaling",
    icon: "📖",
    title: "Journaling",
    description:
      "Reflect on your thoughts and feelings by writing daily journals to promote self-awareness.",
  },
];

const WellnessActivities = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Toggle activity selection
  const toggleActivity = (id) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((act) => act !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedActivities.length === 0) {
      alert("Please select at least one activity to participate in.");
      return;
    }
    // For demo, just log and show confirmation
    console.log("Selected activities:", selectedActivities);
    console.log("User notes:", notes);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0a3d62",
          fontWeight: "700",
          fontSize: "2.5rem",
          marginBottom: "30px",
          borderBottom: "3px solid #00a8ff",
          display: "inline-block",
          paddingBottom: "6px",
        }}
      >
        Wellness Activities
      </h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            marginBottom: "30px",
          }}
        >
          {activities.map(({ id, icon, title, description }) => {
            const selected = selectedActivities.includes(id);
            return (
              <div
                key={id}
                onClick={() => toggleActivity(id)}
                style={{
                  backgroundColor: selected ? "#cce5ff" : "#f0f7ff",
                  borderRadius: "16px",
                  padding: "25px 20px",
                  boxShadow: selected
                    ? "0 0 15px 3px #4dabf7"
                    : "0 8px 20px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  cursor: "pointer",
                  userSelect: "none",
                  transition: "all 0.3s ease",
                  border: selected ? "2px solid #007bff" : "2px solid transparent",
                }}
              >
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: "15px",
                    userSelect: "none",
                  }}
                  aria-label={title}
                  role="img"
                >
                  {icon}
                </div>
                <h3
                  style={{
                    color: "#1e3799",
                    fontWeight: "700",
                    marginBottom: "12px",
                    fontSize: "1.5rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#485460",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    padding: "0 10px",
                  }}
                >
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        <label
          htmlFor="notes"
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#0a3d62",
          }}
        >
          Your personal notes or goals (optional):
        </label>
        <textarea
          id="notes"
          rows="4"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write something to motivate yourself or any preferences..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1.5px solid #a1c6ff",
            marginBottom: "20px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "14px 28px",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,123,255,0.4)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p
          style={{
            marginTop: "30px",
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#28a745",
            textAlign: "center",
          }}
        >
          ✅ Thank you for participating in your wellness activities!
        </p>
      )}
    </div>
  );
};

export default WellnessActivities;
