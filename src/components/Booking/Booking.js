import React, { useState } from "react";
import { Drawer, Col, Row, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { sendBooking } from "../../actions/bookingEmail";
import Swal from "sweetalert2";

const Booking = () => {
  const [state, setState] = useState({ visible: false });
  const [postData, setPostData] = useState({
    name: "",
    phone: "",
    typeDocument: "",
    document: "",
    email: "",
    datefrom: "",
    dateto: "",
    quantity_guest: "",
  });

  const dispatch = useDispatch();

  const handleSummit = async (e) => {
    e.preventDefault();
    if (
      postData.name === "" ||
      postData.phone === "" ||
      postData.typeDocument === "" ||
      postData.document === "" ||
      postData.email === "" ||
      postData.datefrom === "" ||
      postData.dateto === "" ||
      postData.quantity_guest === ""
    ) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      dispatch(sendBooking(postData));
      clear();
      return Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tu correo fue enviado correctamente!",
        text: "Nos comunicaremos contigo en breves",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const clear = () => {
    setPostData({
      name: "",
      phone: "",
      typeDocument: "Select",
      document: "",
      email: "",
      datefrom: "",
      dateto: "",
      quantity_guest: "",
    });
  };

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

  return (
    <>
      <button className="btn text-white" type="danger" onClick={showDrawer}>
        <PlusOutlined /> Reservar
      </button>
      <Drawer
        title="Realizar reserva"
        width={700}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ padding: 80 }}
      >
        <form layout="vertical" onSubmit={handleSummit} method="POST">
          <Row gutter={16}>
            <Col span={12}>
              <label className="text-dark">Nombre Completo</label>
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  value={postData.name}
                  onChange={(e) =>
                    setPostData({ ...postData, name: e.target.value })
                  }
                  placeholder="Tu Nombre"
                />
              </div>
            </Col>
            <Col span={12}>
              <label className="text-dark">Telefono</label>
              <div className="form-group">
                <input
                  className="form-control"
                  name="phone"
                  placeholder="Tu Telefono"
                  value={postData.phone}
                  onChange={(e) =>
                    setPostData({ ...postData, phone: e.target.value })
                  }
                />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <label className="text-dark">Tipo de documento</label>
              <div className="form-group">
                <select
                  className="form-control"
                  name="typedocument"
                  value={postData.typeDocument}
                  onChange={(e) =>
                    setPostData({ ...postData, typeDocument: e.target.value })
                  }
                  placeholder="Tipo de documento"
                >
                  <option value="Select">- Selecciona -</option>
                  <option value="Cedula">Cedula</option>
                  <option value="Visa">Visa</option>
                </select>
              </div>
            </Col>
            <Col span={12}>
              <label className="text-dark">Número de documento</label>
              <div className="form-group">
                <input
                  className="form-control"
                  name="document"
                  value={postData.document}
                  onChange={(e) =>
                    setPostData({ ...postData, document: e.target.value })
                  }
                  placeholder="Tu Número documento"
                />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <label className="text-dark">Correo Electronico</label>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  value={postData.email}
                  onChange={(e) =>
                    setPostData({ ...postData, email: e.target.value })
                  }
                  placeholder="Tu Correo Electronico"
                />
              </div>
            </Col>
            <Col span={12}>
              <label className="text-dark">Fecha inicio</label>
              <div className="form-group">
                <input
                  className="form-control"
                  type="date"
                  value={postData.datefrom}
                  onChange={(e) =>
                    setPostData({ ...postData, datefrom: e.target.value })
                  }
                  name="datefrom"
                />
              </div>
            </Col>
            <Col span={12}>
              <label className="text-dark">Fecha fin</label>
              <div className="form-group">
                <input
                  className="form-control"
                  value={postData.dateto}
                  onChange={(e) =>
                    setPostData({ ...postData, dateto: e.target.value })
                  }
                  type="date"
                  name="dateto"
                />
              </div>
            </Col>
            <Col span={12}>
              <label className="text-dark">Cantidad de personas</label>
              <div className="form-group">
                <input
                  className="form-control"
                  name="quantity_guest"
                  type="number"
                  value={postData.quantity_guest}
                  onChange={(e) =>
                    setPostData({ ...postData, quantity_guest: e.target.value })
                  }
                  placeholder="Cantidad de personas"
                />
              </div>
            </Col>
          </Row>
          <Button
            className="btn btn-danger text-white"
            onClick={onClose}
            style={{ marginRight: 10, height: "38px" }}
          >
            Cancelar
          </Button>
          <button className="btn btn-info text-white">Enviar</button>
        </form>
      </Drawer>
    </>
  );
};

export default Booking;
