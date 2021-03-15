import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarousels } from "../../../actions/Carousel";

import Navbar from "../../../components/Menu/Menu";
import Form from "./Form/Form";
import Carousels from "./Carousels/Carousels";

const FormCarousel = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarousels());
  }, [currentId, dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-ms-4 ,t-5 py-5">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
          <div className="col-xl-12 col-sm-7 text-white">
            <Carousels setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCarousel;
