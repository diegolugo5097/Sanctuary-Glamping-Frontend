import React from "react";
import { useSelector } from "react-redux";
import Gallery from "./Gallery/Gallery";
import "../gallery.css";
const Galleries = ({ setCurrentId }) => {
  const galleries = useSelector((state) => state.galleries);
  return !galleries.length ? (
    <div class="spinner-border text-primary" role="status"></div>
  ) : (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {galleries.map((gallery) => {
          return (
            <div className="col-md-3 col-lg-3 col-xl-3 mt-4">
              <Gallery gallery={gallery} setCurrentId={setCurrentId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galleries;
