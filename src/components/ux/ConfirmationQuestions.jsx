import React from 'react';
import PropTypes from 'prop-types';

let styles = {
  textAlign: 'center',
  border: '1px solid black',
  width: '400px',
  height: '300px',
  margin: 'auto',
  backgroundColor: 'dodgerblue',
  color: 'white',
  marginTop: '200px'
}

const ConfirmationQuestions = (props) => {
  return(
    <div style={styles}>
      <style>{`
          #btn{
            width:100px;
            height: 70px;
            font-size: 25px;
            margin-top: 40%;
            border: 1px solid black;
            box-shadow: 5px 5px 10px;
          }
          #btn:hover{
            cursor: pointer;
          }
          #btn:active{
            transform: scale(.96);
            box-shadow: 0px 0px 0px;
          }
          #question{
            margin-top: 15px;
          }
        `}
      </style>
      <h3 id='question'>Have you checked StackOverflow?</h3>
      <button id='btn' onClick={props.onTsConfirmation}>Yes</button>
    </div>
  );
}
ConfirmationQuestions.propTypes = {
  onTsConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
