import React from "react";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <div className='hero'>
      <h1 className='title'>Xiaomi</h1>
      {/* <p className='description'>
        Some description ...
      </p> */}
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Home;
