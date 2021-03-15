import React, { useState, useEffect } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Menu/Menu";
import { Layout, Carousel, BackTop } from "antd";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { UpOutlined, MailOutlined } from "@ant-design/icons";
import { fetchGlamping } from "../../api/glamping/glamping";
import { fetchGallery } from "../../api/gallery/gallery";
import { fetchCarousel } from "../../api/carousel/carousel";
import { fetchAbouts } from "../../api/aboutUs/aboutUs";
import { API } from "../../config";
import { sendEmail } from "../../actions/sendContact";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const { Content, Footer } = Layout;

const Home = () => {
  const [glamping, setGlamping] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [about, setAbout] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState([]);
  const [postData, setPostData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const loadAboutUs = () => {
    fetchAbouts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAbout(data.data);
      }
    });
  };

  const loadCarousel = () => {
    fetchCarousel().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCarousel(data.data);
      }
    });
  };

  const dispatch = useDispatch();

  const handleSummit = async (e) => {
    e.preventDefault();
    if (
      postData.name === "" ||
      postData.email === "" ||
      postData.phone === "" ||
      postData.message === ""
    ) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Todos los campos son obligatorios!",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      dispatch(sendEmail(postData));
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
      email: "",
      phone: "",
      message: "",
    });
  };

  const loadGalleries = () => {
    fetchGallery().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGallery(data.data);
      }
    });
  };

  const loadGlampings = () => {
    fetchGlamping().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGlamping(data.data);
      }
    });
  };

  const truncate = (str) => {
    return str.length > 1000 ? str.substring(0, 635) + "..." : str;
  };

  useEffect(() => {
    loadGlampings();
    loadAboutUs();
    loadGalleries();
    loadCarousel();
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <Carousel autoplay>
          {carousel.map((carousel) => {
            return (
              <h3 className="contentStyle">
                <div className="carousel">
                  <img src={carousel.image} width={1700} />
                </div>
              </h3>
            );
          })}
        </Carousel>
        <div className="shadow" style={{ opacity: "50%" }}></div>
        <h5 className="caption">
          BIENVENIDO A SANCTUARY GLAMPING
          <hr className="bg-white mt-5" width={1200} />
        </h5>
        <Content className="container mb-5">
          <hr className="bg-white mt-5" />
          <div className="titles text-center p-5 mb-5">GLAMPINS</div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                {glamping.map((glamping) => {
                  return (
                    <Image
                      width={450}
                      src={glamping.image_1}
                      placeholder={
                        <Image
                          preview={false}
                          src={glamping.image_1}
                          width={500}
                        />
                      }
                    />
                  );
                })}
              </div>
              <div className="col-md-6">
                {glamping.map((glamping) => {
                  return (
                    <>
                      <p className="titles">{glamping.name}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: glamping.description,
                        }}
                      />
                    </>
                  );
                })}
                <div>
                  <button className="informacion btn text-white mt-5">
                    <Link
                      className="link"
                      to="/glampings"
                      style={{ textDecoration: "none", color: "#ffff" }}
                    >
                      Mas informacion
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-white mt-5" />
          <div className="titles text-center p-5 mb-5">NOSOTROS</div>
          <div className="col-md-12">
            {about.map((about) => {
              return (
                <>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncate(about.description),
                    }}
                  />
                </>
              );
            })}
          </div>
          <div className="mt-5 mx-5">
            <button className="btn informacion">
              <Link
                className="link"
                to="/aboutUs"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                Mas informacion
              </Link>
            </button>
          </div>
          <hr className="bg-white mt-5" />
          <div className="titles text-center p-5 mb-5">GALERIA</div>
          <div className="col-md-12">
            <div className="row justify-content-center">
              {gallery
                .map((gallery) => {
                  return (
                    <>
                      <Image
                        width={350}
                        src={gallery.image}
                        placeholder={
                          <Image
                            preview={false}
                            src={gallery.image}
                            width={400}
                          />
                        }
                      />
                    </>
                  );
                })
                .slice(0, 3)}
            </div>
            <div className="mt-5">
              <button className="informacion btn text-white mt-5">
                <Link
                  className="link"
                  to="/gallery"
                  style={{
                    textDecoration: "none",
                    color: "#ffff",
                  }}
                >
                  Mas informacion
                </Link>
              </button>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "rgb(42 64 25)",
          }}
          className="footer mt-5"
        >
          <div className="container">
            <img
              src={"https://i.postimg.cc/gj4Tzb5G/logo-final-1.png"}
              width={200}
            />
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="titles text-center">CONTACTENOS</div>
                <form onSubmit={handleSummit} method="POST">
                  <div className="form-group text-left">
                    <label>Nombre:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={postData.name}
                      onChange={(e) =>
                        setPostData({ ...postData, name: e.target.value })
                      }
                      placeholder="Su nombre"
                    />
                  </div>
                  <div className="form-group text-left">
                    <label>Correo electronico:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={postData.email}
                      onChange={(e) =>
                        setPostData({ ...postData, email: e.target.value })
                      }
                      placeholder="Su correo electronico"
                    />
                  </div>
                  <div className="form-group text-left">
                    <label>Numero de telefono:</label>
                    <input
                      className="form-control"
                      type="text"
                      value={postData.phone}
                      onChange={(e) =>
                        setPostData({ ...postData, phone: e.target.value })
                      }
                      name="phone"
                      placeholder="Su numero de telefono"
                    />
                  </div>
                  <div className="form-group text-left">
                    <label>Mensaje:</label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={postData.message}
                      onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                      }
                      name="message"
                      placeholder="Su mensaje"
                    ></textarea>
                  </div>
                  <button className="informacion btn text-white col">
                    <MailOutlined />
                  </button>
                </form>
              </div>
              <div className="col-md-6 mt-5">
                <div className="info">
                  <div>
                    <strong>Numero de telefono</strong>
                    <br />
                    <span>+57 555 555 5555</span>
                  </div>
                  <div className="mt-2">
                    <strong>Direccion</strong>
                    <br />
                    <span>
                      Margen Derecho, Km 1, Alcalá - Quimbaya, Quimbaya, Quindío
                    </span>
                  </div>
                </div>
                <a href="https://www.instagram.com/sanctuary_glamping/?hl=es-la">
                  <i
                    className="fab fa-instagram"
                    style={{
                      marginLeft: "95%",
                      marginTop: "5%",
                      color: "#fff",
                      fontSize: "30px",
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </Footer>
        <BackTop>
          <button className="informacion btn text-white">
            <UpOutlined className="p-2" />
          </button>
        </BackTop>
      </Layout>
    </>
  );
};

export default Home;
