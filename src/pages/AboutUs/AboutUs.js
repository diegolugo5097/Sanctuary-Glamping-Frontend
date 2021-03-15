import React, { useState, useEffect } from "react";
import Navbar from "../../components/Menu/Menu";
import { Layout } from "antd";
import "../../pages/Home/Home.css";
import "./AboutUs.css";
import { fetchAbouts } from "../../api/aboutUs/aboutUs";

const { Footer } = Layout;

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const [error, setError] = useState([]);

  const loadAboutUs = () => {
    fetchAbouts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAboutUs(data.data);
      }
    });
  };

  useEffect(() => {
    loadAboutUs();
  }, []);

  return (
    <>
      <Layout>
        <Navbar />
        <div className="container mt-5 py-5">
          <div className="row justify-content-center mt-5">
            <h2 className="titles text-white">NOSOTROS</h2>
          </div>
          <div>
            <hr className="bg-white mb-5 mt-5" />
            {aboutUs.map((about) => {
              return (
                <>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: about.description,
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
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

export default AboutUs;
