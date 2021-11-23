import React from "react";

const StaticGeneration = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
        >
          <h5 style={{ margin: 0 }}>{user.name}</h5>
          <p style={{ margin: 0 }}>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default StaticGeneration;

export async function getStaticProps() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();

  return {
    props: {
      users: data,
    },
  };
}
