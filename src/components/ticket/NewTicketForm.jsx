import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

let styles = {
  form: {
    backgroundColor:"dodgerblue",
    margin: "auto",
    marginTop: "75px",
    width: "55%",
    height: "500px",
    border: "1px solid black",
    textAlign: "center",
  }
}

const NewTicketForm = (props) => {
  let name = null;
  let location = null;
  let issue = null;

  function handleNewTicketFormSubmission(e){
    e.preventDefault();
    props.onNewTicketCreation({name: name.value, location: location.value, issue: issue.value, timeOpen: new Moment(), className: 'primary'});
    name.value = '';
    location.value = '';
    issue.value = '';
  }

  return (
    <div>
      <style jsx>{`
          input {
            width: 90%;
            height: 50px;
            display: block;
            clear: both;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            border: 1px solid black;
            font-size: 18px;
            background-color:
          }
          input:hover{
            transform: scale(1.02);
            box-shadow: 5px 5px 5px;
            background-color: ghostwhite;
          }
          textarea{
            display: block;
            width: 90%;
            height: 150px;
            margin: auto;
            font-size: 18px;
            border: 1px solid black;
            padding-top: 10px;
          }
          textarea:hover{
            transform: scale(1.02);
            box-shadow: 5px 5px 5px;
            background-color: ghostwhite;
          }
          #btn{
            width:100px;
            height: 70px;
            font-size: 25px;
            margin-top: 50px;
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
        `}
      </style>
      <form onSubmit={handleNewTicketFormSubmission} style={styles.form} id='form'>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {name = input;}} required />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {location = input;}} required />
        <textarea
          id='issue'
          placeholder="What's going on?"
          ref={(textarea) => {issue = textarea;}} required />
        <button id='btn' type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
