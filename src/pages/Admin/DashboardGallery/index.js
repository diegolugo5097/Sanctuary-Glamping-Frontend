import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGallery } from "../../../actions/Gallery";

import Navbar from "../../../components/Menu/Menu";
import Form from "./Form/Form";
import Galleries from "./Galleries/Galleries";

const FormGallery = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-ms-4">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
          <div className="col-xl-12 col-sm-7 text-white">
            <Galleries setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormGallery;
