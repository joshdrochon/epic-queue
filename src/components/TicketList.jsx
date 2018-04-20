import React from 'react';
import Ticket from './Ticket';

let masterTicketList = [
  {
    no: '#47',
    name: '[Name goes here]',
    location: '[Location goes here]',
    issue: '[Issue goes here]'
  },
  {
    no: '#48',
    name: '[Name goes here]',
    location: '[Location goes here]',
    issue: '[Issue goes here]'
  },
  {
    no: '#49',
    name: '[Name goes here]',
    location: '[Location goes here]',
    issue: '[Issue goes here]'
  }
]

function TicketList(){
  return(
    <div>
      <style>{`
        #stats{
          width: max-content;
          margin: auto;
          color: blue;
          padding: 10px;
        }
      `}
      </style>
      {masterTicketList.map((ticket, index)=>
      <Ticket
        no={ticket.no}
        location={ticket.name}
        name={ticket.location}
        issue={ticket.issue}
        key={index}/>
      )}
      <p id="stats">View today's statistics</p>
    </div>
  );
}

export default TicketList;
