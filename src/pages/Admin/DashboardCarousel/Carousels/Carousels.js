import React from "react";
import { useSelector } from "react-redux";
import Carousel from "./Carousel/Carousel";

const Carousels = ({ setCurrentId }) => {
  const carousels = useSelector((state) => state.carousels);
  return !carousels.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <table className="table text-white">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      {carousels.map((carousel) => {
        return <Carousel carousel={carousel} setCurrentId={setCurrentId} />;
      })}
    </table>
  );
};

export default Carousels;
