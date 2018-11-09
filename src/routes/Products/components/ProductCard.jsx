import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product: { id, title, thumb, price } }) => (
  <div className="column is-half-tablet is-one-quarter-desktop">
    <Link to={`/product/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={thumb} alt="episode" />
          </figure>
        </div>
        <div className="card-content">
          <div className="heading">{title}</div>
          <div className="subtitle">{price} $</div>
        </div>
      </div>
    </Link>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({}).isRequired
};

export default ProductCard;
