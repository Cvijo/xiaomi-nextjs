import React from "react";
import ProductListItem from "../../components/products/ProductListItem";
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';


const allProductsUrl =
  "https://offers.xiaomipedia.com/api/v1/products?api_key=ali7w4fhopq34ifn93784fg";

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => {
      return <ProductListItem key={product.id} product={product} />;
    })}
  </ul>
);

const Index = ({products}) => {
  return (
    <Layout>
      {products && <ProductList products={products} />}
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(allProductsUrl);
  const data = await res.json();
  console.log("fetched product data count: " + data.length);
  return {
    products: data
  };
};

Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Index;
