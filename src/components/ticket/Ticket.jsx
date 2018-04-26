import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return(
    <div>
      <style jsx>{`
          #ticket{
            width: 40%;
            border: 1px solid black;
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
          .primary{
            background-color: #dodgerblue;
          }
          .warning{
            background-color: #f0ad4e;
          }
          .danger{
            background-color: #d9534f;
          }
        `}
      </style>
      <div className='danger' id='ticket'>
        <h2>{props.name}</h2>
        <h3>{props.location}</h3>
        <p><em>{props.issue}</em></p>
        <p>{props.formattedWaitTime} ago</p>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Ticket;
