import React from "react";
import Layout from "../components/Layout";
import Button from '@material-ui/core/Button';



//test
const Home: React.FunctionComponent = () => (
  <Layout>
    <div className='hero'>
      <h1 className='title'>Xiaomi</h1>
      {/* <p className='description'>
        Some description ...
        
      </p> */}
    <Button  variant="contained" color="primary">
      Some new button
    </Button>
    <Button  variant="outlined" color="primary">
      Some new button
    </Button>
    <Button  variant="text" color="primary">
      Some new button
    </Button>
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
