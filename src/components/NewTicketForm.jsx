import React from 'react';

let styles = {
  form: {
    backgroundColor:"dodgerblue",
    margin: "auto",
    marginTop: "75px",
    width: "250",
    height: "200px",
    border: "2px solid black",
    textAlign: "center"
  }
}

function NewTicketForm(){
  return (
    <div>
      <style jsx>{`
          input, textarea{
            display: block;
            margin: auto;
          }
          #btn{
            padding: 10px;
            width: max-content;
            border-radius: 25px;
            border: 1px solid black;
            position: relative;
            top: 100px;
          }
          #btn:hover{
            background-color: #5cb85c;
            cursor: pointer;
            border: 1px solid white;
          }
        `}
      </style>
      <form style={styles.form}>
        <input
          type='text'
          id='name'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='What is going on?'/>
        <button id="btn" type='submit'>Get me someone!</button>
      </form>
    </div>
  );
}
export default NewTicketForm;
