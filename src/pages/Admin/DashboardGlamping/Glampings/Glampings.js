import React from "react";
import { useSelector } from "react-redux";
import Glamping from "./Glamping/Glamping";

const Glampings = ({ setCurrentId }) => {
  const glampings = useSelector((state) => state.glampings);
  return !glampings.length ? (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <table className="table text-white">
      <thead className="text-center">
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Imagenes</th>
          <th>Acciones</th>
        </tr>
      </thead>
      {glampings.map((glamping) => {
        return <Glamping glamping={glamping} setCurrentId={setCurrentId} />;
      })}
    </table>
  );
};

export default Glampings;
