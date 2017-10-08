import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageNotFound = props => (
  <div>
    <h3>Oooops... You got here because something is broken</h3>
    <br />
    <h4>
      Nothing to see here really. Would you like to back to{' '}
      <Link to="/" onClick={props.goBack}>
        home page
      </Link>?
    </h4>
  </div>
);

PageNotFound.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default PageNotFound;
