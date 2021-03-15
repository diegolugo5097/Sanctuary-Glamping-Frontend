import React, { useState, useEffect } from "react";
import { Layout, Image } from "antd";
import Navbar from "../../components/Menu/Menu";
import { fetchGallery } from "../../api/gallery/gallery";

const { Content, Footer } = Layout;

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState([]);

  const loadGalleries = () => {
    fetchGallery().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGallery(data.data);
      }
    });
  };

  useEffect(() => {
    loadGalleries();
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <Content className="container mt-5 py-5">
          <div className="row justify-content-center mt-5">
            <h2 className="titles text-white">GALLERIA</h2>
          </div>
          <hr className="bg-white mb-5 mt-5" />
          <div className="row justify-content-center">
            <Image.PreviewGroup>
              {gallery.map((gallery) => {
                return (
                  <>
                    <Image
                      className="mx-auto px-1 py-1"
                      width={200}
                      src={gallery.image}
                    />
                  </>
                );
              })}
            </Image.PreviewGroup>
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

export default Gallery;
