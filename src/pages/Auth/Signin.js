import React, { useState } from "react";
import "./Signin.css";
import { signin, authenticate, isAuthenticated } from "../../api/auth/auth";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: false, loading: true });
        return Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Hubo un problema, revisa tus credenciales!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
          return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bienvendio!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };
  /**
   * Function that builds the login / sign in form
   */
  const signinForm = () => (
    <div className="d-flex justify-content-center">
      <div className="card row col-md-5">
        <div className="logo">
          <img
            src={"https://i.postimg.cc/mgXfBC90/Logo-verde.png"}
            width={280}
          />
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <li className="fas fa-at"></li>
                  </div>
                </div>
                <input
                  onChange={handleChange("email")}
                  type="email"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Correo Electronico"
                  value={email}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <li className="fas fa-key"></li>
                  </div>
                </div>
                <input
                  onChange={handleChange("password")}
                  type="password"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Contraseña"
                  value={password}
                />
              </div>
            </div>
            <div
              onClick={clickSubmit}
              className="btn-ingresar btn text-white col"
            >
              INGRESAR
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === "1") {
        return <Redirect to="/admin/glamping" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect top="/" />;
    }
  };

  return (
    <>
      {signinForm()}
      {redirectUser()}
    </>
  );
};

export default Signin;
