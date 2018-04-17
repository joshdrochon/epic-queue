import React from 'react';

function NewTicketForm(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Your name here'/>
        <input
          type='text'
          id='location'
          placeholder='Enteryour station'/>
        <textarea
          id='issue'
          placeholder='Tell us the issue?'/>
      </form>
    </div>
  )
}

export default NewTicketForm;
