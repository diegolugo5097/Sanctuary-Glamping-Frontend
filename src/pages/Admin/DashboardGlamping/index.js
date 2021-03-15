import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getGlamping } from "../../../actions/Glamping";

import Navbar from "../../../components/Menu/Menu";
import Form from "./Form/Form";
import Glampings from "./Glampings/Glampings";

const FormGlamping = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlamping());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-md-12 mt-5">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="text-white mt-5">
          <div className="row">
            <Glampings setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormGlamping;
