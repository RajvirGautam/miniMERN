import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = React.useState(localStorage.getItem("token"));

  return (
    <div>
      <h1>MERN Auth App</h1>
      {token ? <Dashboard token={token} /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;