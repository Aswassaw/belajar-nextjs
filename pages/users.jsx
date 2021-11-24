import React from "react";
import UserList from "../components/UserList";

const Users = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>

      {/* <UserList users={users} /> */}
    </div>
  );
};

export default Users;

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// }
