import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../home/TicketList';
import TicketDetails from './TicketDetails';

function Admin(props){
  return (
    <div>
      <TicketDetails />
      <TicketList ticketList={props.ticketList} currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
}

export default Admin;

//React-Router automatically passes a location.pathname prop to components rendered in its <Route> tags.
