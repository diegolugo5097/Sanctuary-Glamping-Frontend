import React from "react";
import { useSelector } from "react-redux";
import User from "./User/User";

const Users = ({ setCurrentId }) => {
  const users = useSelector((state) => state.users);
  return !users.length ? (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <table className="text-white text-center table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      {users.map((user) => {
        return <User user={user} setCurrentId={setCurrentId} />;
      })}
    </table>
  );
};

export default Users;
