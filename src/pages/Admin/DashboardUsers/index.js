import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUsers } from "../../../actions/Users";

import Navbar from "../../../components/Menu/Menu";
import Form from "./Form/Form";
import Users from "./Users/Users";

const FormUser = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-xl-12 col-ms-4 mt-5">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="col-xl-12 col-sm-7 text-white mt-5">
          <Users setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
};

export default FormUser;
