/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';

const NotFound = (props) => {
  
  return (
    <article>
      <h1>
        Page Not Found.
      </h1>
    </article>
  );
}

export default connect()(NotFound);
