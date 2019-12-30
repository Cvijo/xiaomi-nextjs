import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ProductItem from "../../components/products/ProductItem";
import fetch from "isomorphic-unfetch";

const allProductLinksUrl =
  "https://offers.xiaomipedia.com/api/v1/links?api_key=ali7w4fhopq34ifn93784fg";

const useStyles = makeStyles(() => ({
  container: {    
    margin: 20,
    display: "flex",    
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));

const ProductDetail = ({ links }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {links &&
        links.map((link: any) => {
          return <ProductItem key={link.idLink} link={link} />;
        })}
    </div>
  );
};

ProductDetail.getInitialProps = async (context: any) => {
  const { id } = context.query;
  const res = await fetch(`${allProductLinksUrl}&product_id=${id}`);
  const data = await res.json();
  console.log("fetched links data count: " + data.length);
  return {
    links: data
  };
};

export default ProductDetail;
