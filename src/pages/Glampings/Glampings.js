import React, { useState, useEffect } from "react";
import Navbar from "../../components/Menu/Menu";
import { Layout, Image } from "antd";
import Booking from "../../components/Booking/Booking";
import "./Glampings.css";
import { fetchGlamping } from "../../api/glamping/glamping";

const { Content, Footer } = Layout;

const Glampings = () => {
  const [glamping, setGlamping] = useState([]);
  const [error, setError] = useState([]);

  const loadGlampings = () => {
    fetchGlamping().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGlamping(data.data);
      }
    });
  };

  useEffect(() => {
    loadGlampings();
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <Content className="container mt-5 py-5">
          <div className="row justify-content-center mt-2 py-5">
            <h2 className="titles text-white">GLAMPINGS</h2>
          </div>
          <hr className="bg-white mb-5 mt-5" />
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-6 mb-5">
                <Image.PreviewGroup>
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
                  {glamping.map((glamping) => {
                    return (
                      <>
                        <div className="mt-4">
                          <Image
                            width={90}
                            src={glamping.image_2}
                            placeholder={
                              <Image
                                preview={false}
                                src={glamping.image_2}
                                width={500}
                              />
                            }
                          />
                          <Image
                            width={90}
                            src={glamping.image_3}
                            placeholder={
                              <Image
                                preview={false}
                                src={glamping.image_3}
                                width={500}
                              />
                            }
                          />
                          <Image
                            width={90}
                            src={glamping.image_4}
                            placeholder={
                              <Image
                                preview={false}
                                src={glamping.image_4}
                                width={500}
                              />
                            }
                          />
                          <Image
                            width={90}
                            src={glamping.image_5}
                            placeholder={
                              <Image
                                preview={false}
                                src={glamping.image_5}
                                width={500}
                              />
                            }
                          />
                          <Image
                            width={90}
                            src={glamping.image_6}
                            placeholder={
                              <Image
                                preview={false}
                                src={glamping.image_6}
                                width={500}
                              />
                            }
                          />
                        </div>
                      </>
                    );
                  })}
                </Image.PreviewGroup>
              </div>
              <div className="col-md-6 mb-5">
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
                <div className="informacion btn mt-2">
                  <Booking />
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
          }}
          className="mt-5 p-5 footer"
        >
          <img
            src={"https://i.postimg.cc/gj4Tzb5G/logo-final-1.png"}
            width={200}
          />
        </Footer>
      </Layout>
    </>
  );
};

export default Glampings;
