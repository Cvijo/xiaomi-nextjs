import React from "react";
import { PropTypes } from "prop-types";

const ProductItem = ({ link }) => {
  const imgUrl = link.imageUrl;
  return (
    <div>
      <div className='product-card' key={link.idLink}>
        <a onClick={() => this.handleDeleteLink(link.idLink)}>
          <i className='far fa-fw fa-trash-alt product-delete' />
        </a>
        <div className='product-image'>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            <img alt='product' src={imgUrl || "/img/image-placeholder.png"} />
          </a>
        </div>
        <div className='product-info'>
          <div>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              <strong className='product-link'>
                {link.storeName || "- not scraped -"}
              </strong>
            </a>
          </div>
          <div>
            Price: {link.priceMin} - {link.priceMax} {link.priceMinCurrency}
          </div>
          <div>Rating: {link.rating}</div>
          <div>Sales: {link.salesCount}</div>
        </div>
      </div>
      {/* <a href={link.url}>
          {link.idLink} - {link.title}
        </a> */}
      <style jsx>{`
        .product-card {
          flex: 1 16%;
          margin: 10px;
          max-width: 200px;
          min-width: 200px;
          border: solid 1px #ddd;
          padding: 10px;
          position: relative;
        }

        .product-image img {
          max-width: 100%;
          padding: 5px;
          margin-bottom: 10px;
        }

        .product-info {
          margin-top: auto;
          font-size: 14px;
        }

        .product-link {
          color: black;
        }

        .product-delete {
          position: absolute;
          right: 10px;
          bottom: 12px;
          cursor: pointer;
        }

        @media (max-width: 920px) {
          .product-card {
            flex: 1 21%;
          }
        }
      `}</style>
    </div>
  );
};

ProductItem.propTypes = {
  link: PropTypes.object.isRequired
};

export default ProductItem;
