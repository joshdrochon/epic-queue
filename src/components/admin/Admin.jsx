import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../home/TicketList';

function Admin(props){
  console.log(props.currentRouterPath);
  return (
    <div>
      <p>Welcome to the admin page</p>
      <TicketList ticketList={props.ticketList} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
}

export default Admin;

//React-Router automatically passes a location.pathname prop to components rendered in its <Route> tags.
