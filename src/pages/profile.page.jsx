import { useState } from "react";

export const Profile = () => {
  const [name, setName] = useState("Sierra Parker");
  const [email, setEmail] = useState("sierra@email.com");
  const [bio, setBio] = useState(
    "Food lover, creator, and future product designer."
  );

  const handleUpdate = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "60px auto",
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "40px"
        }}
      >
        Your Profile
      </h1>

      <div style={{ marginBottom: "25px" }}>
        <label style={{ fontWeight: "600" }}>
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />
      </div>

      <div style={{ marginBottom: "25px" }}>
        <label style={{ fontWeight: "600" }}>
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <label style={{ fontWeight: "600" }}>
          Bio
        </label>
        <textarea
          rows="5"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />
      </div>

      <button
        onClick={handleUpdate}
        style={{
          background: "#000",
          color: "white",
          border: "none",
          padding: "14px 28px",
          borderRadius: "999px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Save Profile
      </button>
    </div>
  );
};