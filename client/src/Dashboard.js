import React, { useEffect, useState } from "react";

function Dashboard({ token }) {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setMsg(data.msg));
  }, [token]);

  return <h2>{msg}</h2>;
}

export default Dashboard;