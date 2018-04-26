import React from 'react';
import PropTypes from "prop-types";

const Error404 = (props) => {
  return(
    <div>
      <h1>The page {props.location.pathname} doesn't exist, Sam.</h1>
    </div>
  )
}

Error404.propTypes = {location: PropTypes.object};

export default Error404;
