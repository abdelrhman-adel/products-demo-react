import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import {
  productsSelectors,
  productsThunks
} from "../../../store/reducers/products";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;
    if (!product) this.refresh();
  }

  refresh() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    const { isLoading, hasError, product } = this.props;

    return isLoading ? (
      <Loading />
    ) : hasError ? (
      <Error onRetry={this.refresh} />
    ) : product ? (
      <div className="product">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container-fluid">
              <h1 className="title">
                {product.title} - {product.price}$
              </h1>
              <div className="columns">
                <div className="column is-one-third">
                  <ImageGallery items={product.images} />
                </div>
                <div className="column has-text-left-tablet">
                  <p>
                    <strong>description : </strong>
                    {product.description}
                  </p>
                  <p>
                    <strong>specification : </strong>
                    {product.specification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ) : null;
  }
}
ProductContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.bool]).isRequired
};
const mapStateToProps = (
  { products: { isLoading, hasError }, products },
  {
    match: {
      params: { id }
    }
  }
) => ({
  isLoading,
  hasError,
  product: productsSelectors.getProduct(products, id)
});
const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(productsThunks.getProducts())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
