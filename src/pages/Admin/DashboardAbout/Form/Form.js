import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAbout, updateAbout } from "../../../../actions/AboutUs";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";
import { Modal } from "antd";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    description: "",
  });

  const [state, setState] = useState({
    visible: false,
  });

  const about = useSelector((state) =>
    currentId ? state.abouts.find((a) => a._id === currentId) : null
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
    if (about) setPostData(about);
  }, [about]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (postData.description === "") {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (currentId) {
        dispatch(updateAbout(currentId, postData));
        clear();
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se actualizo correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        dispatch(createAbout(postData));
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
      description: "",
    });
  };

  return (
    <>
      <div className="btn-group mt-5">
        <input
          className={
            currentId ? "btn btn-warning mt-5" : "btn btn-primary mt-5"
          }
          type="submit"
          value={currentId ? "Editar" : "Agregar"}
          onClick={showModal}
        />
      </div>
      <Modal
        title={currentId ? "Editar Sobre Nosotros" : "Crear Sobre Nosotros"}
        onCancel={onClose}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={750}
        visible={state.visible}
      >
        <form onSubmit={handleSummit}>
          <div className="form-group">
            <Editor
              value={postData.description ? postData.description : ""}
              name="description"
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
              }}
              onBlur={(e) =>
                setPostData({
                  ...postData,
                  description: e.target.getContent(),
                })
              }
            />
          </div>
          <div className="card-footer">
            <div className="btn-group">
              <input
                className={currentId ? "btn btn-warning" : "btn btn-primary"}
                type="submit"
                value={currentId ? "Editar" : "Agregar"}
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Form;
