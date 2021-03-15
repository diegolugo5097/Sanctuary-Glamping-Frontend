import React from "react";
import { useDispatch } from "react-redux";
import { deleteGallery } from "../../../../../actions/Gallery";
import { Image } from "antd";

const Gallery = ({ gallery, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div class="card" style={{ maxWidth: "18rem" }}>
        <Image src={gallery.image} class="card-img-top" width={200} />
        <div class="card-body text-center">
          <div className="btn-group" style={{ marginLeft: "-20%" }}>
            <button
              type="submit"
              className="btn btn-danger"
              value="Eliminar"
              onClick={() => dispatch(deleteGallery(gallery._id))}
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-warning"
              type="submit"
              value="editar"
              onClick={() => setCurrentId(gallery._id)}
            >
              <i class="far fa-edit"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
