import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../../actions/Users";

const User = ({ user, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <div className="btn-group">
            <input
              className="btn btn-danger"
              onClick={() => dispatch(deleteUser(user._id))}
              type="submit"
              value="Eliminar"
            />
            <input
              className="btn btn-warning"
              onClick={() => setCurrentId(user._id)}
              value="Editar"
              type="submit"
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
