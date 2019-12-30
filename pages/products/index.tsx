import React, { useState } from "react";
import ProductListItem from "../../components/products/ProductListItem";
import fetch from "isomorphic-unfetch";


const allProductsUrl =
  "https://offers.xiaomipedia.com/api/v1/products?api_key=ali7w4fhopq34ifn93784fg";

const ProductList = ({ products }: any) => (
  <ul>
    {products.map((product: any) => {
      return <ProductListItem key={product.id} product={product} />;
    })}
  </ul>
);

const Index = ({ products }:any) => {
  const allProducts = products;
  const [filteredProduct, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const tmpProducts = allProducts.filter( (product: any) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredProducts(tmpProducts);
    } else {
      setFilteredProducts(allProducts);
    }
  };

  return (
    <React.Fragment>
      <input onChange={onSearchChange} value={searchTerm} />
      {products && <ProductList products={filteredProduct} />}
    </React.Fragment>
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


export default Index;
