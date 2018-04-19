import React from 'react';
import PropTypes from "prop-types";

function Error404(props){
  console.log(props);
  return(
    <div>
      <h1>The page {props.location.pathname} doesn't exist, Sam.</h1>
    </div>
  )
}

Error404.propTypes = {location: PropTypes.object};

export default Error404;
