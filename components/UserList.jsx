import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
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

export default UserList;
