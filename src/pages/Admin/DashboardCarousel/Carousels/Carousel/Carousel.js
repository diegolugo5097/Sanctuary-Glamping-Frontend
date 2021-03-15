import React from "react";
import { useDispatch } from "react-redux";
import { deleteCarousel } from "../../../../../actions/Carousel";
import { Image } from "antd";

const Carousel = ({ carousel, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td>
          <Image src={carousel.image} width={200} />
        </td>
        <td>
          <div className="btn-group">
            <button
              type="submit"
              className="btn btn-danger"
              value="Eliminar"
              onClick={() => dispatch(deleteCarousel(carousel._id))}
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-warning"
              type="submit"
              value="editar"
              onClick={() => setCurrentId(carousel._id)}
            >
              <i class="far fa-edit"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Carousel;
