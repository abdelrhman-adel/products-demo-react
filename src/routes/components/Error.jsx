import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * an Error component that renders every time we got an api Error
 * @param onRetry a function that should run on retry button  click
 * @returns {*}
 * @constructor
 */
const Error = ({ onRetry }) => (
  <div className="loading">
    an error happened, please click either of those buttons
    <div className="buttons is-centered">
      <Link to="/" className="button is-primary">
        Home
      </Link>
      <button type="button" className="button is-info" onClick={onRetry}>
        retry
      </button>
    </div>
  </div>
);

Error.propTypes = {
  onRetry: PropTypes.func.isRequired
};

export default Error;
