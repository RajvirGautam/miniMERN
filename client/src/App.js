import React from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.header}>Hello, frontend is NOT blank! 🚀</h1>
      <Signup />
      <hr style={styles.hr} />
      <Login setToken={() => {}} />
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