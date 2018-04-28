import React from 'react';
import Ticket from '../ticket/Ticket';
import PropTypes from 'prop-types';

const TicketList = (props) => {
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
      {Object.keys(props.ticketList).map(function(ticketId){
        let ticket = props.ticketList[ticketId];
        return <Ticket
          name={ticket.name}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          className={ticket.className}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          ticketId={ticketId}
          onTicketSelection={props.onTicketSelection}/>;
      })}
        <p id='stats'>View today's statistics</p>
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
