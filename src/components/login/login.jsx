import { useState } from "react";

export const Login = ({ setIsLoggedIn }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = { username, password };

    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
};