import React, { useState } from "react";
import ProductListItem from "../../components/products/ProductListItem";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import { PropTypes } from "prop-types";

const allProductsUrl =
  "https://offers.xiaomipedia.com/api/v1/products?api_key=ali7w4fhopq34ifn93784fg";

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => {
      return <ProductListItem key={product.id} product={product} />;
    })}
  </ul>
);

const Index = ({ products }) => {
  const allProducts = products;
  const [filteredProduct, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const tmpProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredProducts(tmpProducts);
    } else {
      setFilteredProducts(allProducts);
    }
  };

  return (
    <Layout>
      <input onChange={onSearchChange} value={searchTerm} />
      {products && <ProductList products={filteredProduct} />}
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
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Index;
