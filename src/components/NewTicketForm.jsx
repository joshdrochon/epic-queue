import React from 'react';
import Header from './Header'

let styles = {
  form: {
    backgroundColor:"dodgerblue",
    margin: "auto",
    marginTop: "75px",
    width: "55%",
    height: "400px",
    border: "1px solid black",
    textAlign: "center"
  }
}

function NewTicketForm(){
  let name = null;
  let location = null;
  let issue = null;

  function handleNewTicketFormSubmission(event){
    //reset values
    name.value = '';
    location.value = '';
    issue.value = '';
    event.preventDefault();
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
            padding: 10px;
            width: max-content;
            border: 1px solid black;
            position: relative;
            top: 17px;
            font-size: 16px;
          }
          #btn:hover{
            background-color: ghostwhite;
            cursor: pointer;
          }
        `}
      </style>
      <form onSubmit={handleNewTicketFormSubmission} style={styles.form} id="form">
        <input
          type='text'
          id='name'
          placeholder=' Pair Names'
          ref={(input) => {name = input;}}/>
        <input
          type='text'
          id='location'
          placeholder=' Location'
          ref={(input) => {location = input;}}/>
        <textarea
          id='issue'
          placeholder=" What's going on?"
          ref={(textarea) => {issue = textarea;}}/>
        <button id="btn" type='submit'>Help!</button>
      </form>
    </div>
  );
}
export default NewTicketForm;
