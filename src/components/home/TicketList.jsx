import React from 'react';
import Ticket from '../ticket/Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  console.log(props.ticketList);
  console.log(typeof(ticketList));
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
        className={ticket.className}
        currentRouterPath={props.currentRouterPath}
        key={ticket.id}/>
      )}
      <p id="stats">View today's statistics</p>
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default TicketList;
