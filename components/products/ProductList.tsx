import React from "react";
import { Card, CardContent, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";
import ProductListItem from "./ProductListItem";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    maxWidth: 400,
    margin: 5,
    display: "flex",
    flexDirection: "column"
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const ProductList = ({ products }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography variant='h5' component='h1'>
          Products
        </Typography> */}
        <List>
          {products &&
            products.length > 0 &&
            products.map((product: any) => {
              <ProductListItem product={product} />;
            })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProductList;
