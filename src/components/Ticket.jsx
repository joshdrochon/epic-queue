import React from 'react';
//any component using prop-types must import this dependency
import PropTypes from "prop-types";

function Ticket(props){
  return(
    <div>
      <style jsx>{`
          #ticket{
            width: 40%;
            border: 1px solid black;
            background-color: dodgerblue;
            margin: auto;
            margin-top: 20px;
            text-align: center;
            padding: 20px;
            color: ghostwhite;
          }
          #ticket-template h2, h3, p{
            margin: 10px;
          }
          #ticket:hover{
            transform: scale(1.05);
            box-shadow: 10px 5px 5px gray;
            cursor: pointer;
          }
        `}
      </style>
      <div id="ticket">
        <h3>{props.no}</h3>
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
