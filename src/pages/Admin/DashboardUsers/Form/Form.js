import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createUser, updateUser } from "../../../../actions/Users";
import { Modal } from "antd";

const Form = ({ currentId, setCurrentId }) => {
  const [state, setState] = useState({
    visible: false,
  });

  const [postData, setPostData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: 0,
  });

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const user = useSelector((state) =>
    currentId ? state.users.find((u) => u._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) setPostData(user);
  }, [user]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (
      postData.name === "" ||
      postData.username === "" ||
      postData.email === "" ||
      postData.password === "" ||
      postData.role === 0
    ) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (currentId) {
        dispatch(updateUser(currentId, postData));
        clear();
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se actualizó correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        dispatch(createUser(postData));
        clear();
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se agregó correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: "",
      username: "",
      email: "",
      password: "",
      role: 0,
    });
  };

  return (
    <>
      <div className="btn-group mt-5 py-5">
        <input
          className={currentId ? "btn btn-warning" : "btn btn-primary"}
          type="submit"
          value={currentId ? "Editar" : "Agregar"}
          onClick={showModal}
        />
      </div>
      <Modal
        title={currentId ? "Editar Usuario" : "Crear nuevo usuario"}
        onCancel={onClose}
        visible={state.visible}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <form onSubmit={handleSummit}>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Su nombre"
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="username"
              type="text"
              placeholder="Nombre de usuario"
              value={postData.username}
              onChange={(e) =>
                setPostData({ ...postData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Correo Electronico"
              value={postData.email}
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={postData.password}
              onChange={(e) =>
                setPostData({ ...postData, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              onChange={(e) => {
                setPostData({ ...postData, role: e.target.value });
              }}
            >
              <option value={0}>- Selecciona -</option>
              <option value={1}>Administrador</option>
              <option value={2}>Otro</option>
            </select>
          </div>

          <div className="card-footer">
            <div className="btn-group">
              <input
                className={currentId ? "btn btn-warning" : "btn btn-primary"}
                type="submit"
                value={currentId ? "Editar" : "Agregar"}
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Form;
