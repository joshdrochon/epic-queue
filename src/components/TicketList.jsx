import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  console.log(props.ticketList);
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
      {props.ticketList.map((ticket)=>
      <Ticket
        name={ticket.name}
        location={ticket.location}
        issue={ticket.issue}
        formattedWaitTime={ticket.formattedWaitTime}
        key={ticket.id}/>
      )}
      <p id="stats">View today's statistics</p>
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
