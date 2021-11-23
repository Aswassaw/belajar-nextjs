import React from "react";
import UserList from "../components/UserList";

const StaticGeneration = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>

      <UserList users={users} />
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
