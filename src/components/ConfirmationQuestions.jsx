import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return(
    <div>
      <p>Have you checked StackOverflow?</p>
      <button onClick={props.onTsConfirmation}>Yes</button>
    </div>
  );
}
ConfirmationQuestions.propTypes = {
  onTsConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
