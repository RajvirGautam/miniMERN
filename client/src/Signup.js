import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Signup successful!");
      } else {
        setMessage(`❌ ${data.msg}`);
      }
    } catch (err) {
      setMessage("❌ Signup failed. Server error.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleSignup}>Signup</button>
      <p>{message}</p>
    </div>
  );
}

export default Signup;