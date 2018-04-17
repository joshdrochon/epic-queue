import React from 'react';
//any component using prop-types must import this dependency
import PropTypes from "prop-types";

function Ticket(props){
  return(
    <div>
      <style jsx>{`
          #ticket-template{
            width: 300px;
            height: 125px;
            border: 1px solid black;
            background-color: dodgerblue;
            margin: auto;
            margin-top: 20px;
            text-align: center;
          }
        `}
      </style>
      <div id="ticket-template">
        <h2>{props.location}</h2>
        <h3>{props.name}</h3>
        <p><em>{props.issue}</em></p>
      </div>
    </div>
  );
}
Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;
