import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import Swal from "sweetalert2";

import { Collapse, Space, Modal } from "antd";

import { createGlamping, updateGlamping } from "../../../../actions/Glamping";
import { Editor } from "@tinymce/tinymce-react";

const { Panel } = Collapse;

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: "",
    description: "",
    image_1: "",
    image_2: "",
    image_3: "",
    image_4: "",
    image_5: "",
    image_6: "",
  });

  const [state, setState] = useState({
    visible: false,
  });

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const glamping = useSelector((state) =>
    currentId ? state.glampings.find((g) => g._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (glamping) setPostData(glamping);
  }, [glamping]);

  const handleSummit = async (e) => {
    e.preventDefault();
    if (
      postData.name === "" ||
      postData.description === "" ||
      postData.image_1 === "" ||
      postData.image_2 === "" ||
      postData.image_3 === "" ||
      postData.image_4 === "" ||
      postData.image_5 === "" ||
      postData.image_6 === ""
    ) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (currentId) {
        dispatch(updateGlamping(currentId, postData));
        clear();
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se actualizó correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        dispatch(createGlamping(postData));
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
      name: "",
      description: "",
      image_1: "",
      image_2: "",
      image_3: "",
      image_4: "",
      image_5: "",
      image_6: "",
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
          onClick={showDrawer}
        />
      </div>
      <Modal
        className="form"
        title={currentId ? "Editar Glamping" : "Crear Glamping"}
        onCancel={onClose}
        width={750}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        visible={state.visible}
      >
        <form onSubmit={handleSummit}>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Nombre del glamping"
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
          </div>
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
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat",
              }}
              onBlur={(e) =>
                setPostData({
                  ...postData,
                  description: e.target.getContent(),
                })
              }
            />
          </div>
          <Space direction="vertical" className="form-group col">
            <Collapse collapsible="header">
              <Panel header="Imagenes">
                <div className="form-group">
                  <label>Imagen Principal</label>
                  <div className="form-control">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, image_1: base64 })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Imagen secundaria</label>
                  <div className="form-control">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, image_2: base64 })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Imagen secundaria</label>
                  <div className="form-control">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, image_3: base64 })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Imagen secundaria</label>
                  <div className="form-control">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, image_4: base64 })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Imagen secundaria</label>
                  <div className="form-control">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, image_5: base64 })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Imagen secundaria</label>
                  <div className="form-control">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...postData, image_6: base64 })
                      }
                    />
                  </div>
                </div>
              </Panel>
            </Collapse>
          </Space>
          <div className="btn-group">
            <input
              className={currentId ? "btn btn-warning" : "btn btn-primary"}
              type="submit"
              value={currentId ? "Editar" : "Agregar"}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Form;
