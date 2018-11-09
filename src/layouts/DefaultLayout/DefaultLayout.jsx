import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children, location: { pathname } }) => (
  <div>
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <div className="navbar-item logo">Products</div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          {pathname !== "/" && (
            <div className="buttons">
              <Link to="/" className="button is-primary">
                <strong>Back to Products</strong>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
    <div className="section">
      <div className="container is-desktop">{children}</div>
    </div>
  </div>
);

DefaultLayout.propTypes = {
  location: PropTypes.shape({}),
  children: PropTypes.element
};

export default withRouter(DefaultLayout);
