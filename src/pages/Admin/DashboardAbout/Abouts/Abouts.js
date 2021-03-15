import React from "react";
import { useSelector } from "react-redux";
import About from "./About/About";

const Abouts = ({ setCurrentId }) => {
  const abouts = useSelector((state) => state.abouts);
  return !abouts.length ? (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <table className="table text-white">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      {abouts.map((about) => {
        return <About about={about} setCurrentId={setCurrentId} />;
      })}
    </table>
  );
};

export default Abouts;
