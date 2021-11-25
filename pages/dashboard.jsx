import React from "react";
import useSWR from "swr";

const fethcer = async () => {
  const res = await fetch("http://localhost:8000/dashboard");
  const data = await res.json();

  return data;
};

const Dashboard = () => {
  const { data, error } = useSWR("dashboard", fethcer);

  if (error) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  if (!data) {
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
