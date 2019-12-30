import React from "react";
import NextLink from "next/link";
import {
  ListItem,
  ListItemText
} from "@material-ui/core";

const ProductListItem = ({ product }: any) => {
  return (
    <NextLink
      href='/products/[id]'
      as={`/products/${product.id}`}
      key={product.id}
    >
      <ListItem button>
        {/* <ListItemAvatar>
        <Avatar alt={chapter.title} src={chapter.photo} />
      </ListItemAvatar> */}
        <ListItemText primary={`${product.id}. ${product.name}`} />
      </ListItem>
    </NextLink>
  );
};

export default ProductListItem;
