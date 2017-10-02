import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h3>Oooops... You got here because something is broken</h3>
    <br />
    <h4>
      Nothing to see here really. Would you like to back to{' '}
      <Link to={'/'}>home page</Link>?
    </h4>
  </div>
);

export default PageNotFound;
