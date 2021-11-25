import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/dashboard");
      const data = await res.json();
      setData(data);

      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data.posts}</p>
      <p>{data.likes}</p>
      <p>{data.followers}</p>
      <p>{data.following}</p>
    </div>
  );
};

export default Dashboard;
