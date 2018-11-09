import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { productsThunks } from "../../../store/reducers/products";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import ProductCard from "../components/ProductCard";

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { products } = this.props;
    if (!products || !products.length) this.refresh();
  }

  refresh() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    const { isLoading, hasError, products } = this.props;

    return isLoading ? (
      <Loading />
    ) : hasError ? (
      <Error onRetry={this.refresh} />
    ) : (
      <div className="products">
        <section className="section">
          <div className="columns is-multiline">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
ProductsContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
const mapStateToProps = ({ products: { products, isLoading, hasError } }) => ({
  isLoading,
  hasError,
  products
});
const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(productsThunks.getProducts())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
