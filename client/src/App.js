import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.header}>🔥 Mini MERN Auth App 🔐</h1>
      {!token ? (
        <>
          <Signup />
          <hr style={styles.hr} />
          <Login setToken={setToken} />
        </>
      ) : (
        <div>
          <h2>✅ Logged in!</h2>
          <p>JWT Token stored in localStorage</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setToken(null);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    color: "#fff",
    fontFamily: "Arial",
    backgroundColor: "#111",
    height: "100vh",
  },
  header: {
    marginBottom: "30px",
    fontSize: "28px",
  },
  hr: {
    width: "60%",
    margin: "30px auto",
    border: "1px solid #444",
  },
};

export default App;