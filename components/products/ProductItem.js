import React from "react";
import { PropTypes } from "prop-types";

const ProductItem = ({ link }) => {
  return (
    <li>
        <a href={link.url}>
          {link.idLink} - {link.title}
        </a>
    </li>
  );
};

ProductItem.propTypes = {
  link: PropTypes.object.isRequired
};

export default ProductItem;
