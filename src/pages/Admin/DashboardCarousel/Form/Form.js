import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import Swal from "sweetalert2";
import { Modal } from "antd";
import { createCarousel, updateCarousel } from "../../../../actions/Carousel";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    image: "",
  });

  const [state, setState] = useState({
    visible: false,
  });

  const carousel = useSelector((state) =>
    currentId ? state.carousels.find((c) => c._id === currentId) : null
  );

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (carousel) setPostData(carousel);
  }, [carousel]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (postData.image === "") {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (currentId) {
        dispatch(updateCarousel(currentId, postData));
        clear();
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se actualizó correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        dispatch(createCarousel(postData));
        clear();
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se agregó correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      image: "",
    });
  };

  return (
    <>
      <div className="btn-group mt-5 py-5">
        <input
          className={currentId ? "btn btn-warning" : "btn btn-primary"}
          type="submit"
          value={currentId ? "Editar" : "Agregar"}
          onClick={showModal}
        />
      </div>
      <Modal
        title={currentId ? "Editar Carousel" : "Crear Carousel"}
        onCancel={onClose}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={750}
        visible={state.visible}
      >
        <form onSubmit={handleSummit}>
          <div className="form-group">
            <div className="form-control">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, image: base64 })
                }
              />
            </div>
          </div>
          <input
            className={currentId ? "btn btn-warning" : "btn btn-primary"}
            type="submit"
            value={currentId ? "Editar" : "Agregar"}
            onClick={showModal}
          />
        </form>
      </Modal>
    </>
  );
};

export default Form;
