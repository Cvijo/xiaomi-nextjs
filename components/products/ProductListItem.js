import React from "react";
import { PropTypes } from "prop-types";
import Link from "next/link";

const ProductListItem = ({ product }) => {
  return (
    <li>
      <Link href="/products/[id]" as={`/products/${product.id}`}>
        <a>
          {product.id} - {product.name}
        </a>
      </Link>
    </li>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListItem;
