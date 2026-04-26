import { useState } from "react";

export const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      username,
      password
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setIsLoggedIn(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f7f7"
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "420px",
          background: "white",
          padding: "50px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px"
          }}
        >
          Welcome back
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px"
          }}
        >
          Sign in to continue reading and writing.
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#000",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};