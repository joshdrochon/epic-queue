import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../home/TicketList';
import TicketDetails from './TicketDetails';

const Admin = (props) => {
  //console logs go here if need
  return (
    <div>
      <TicketDetails />
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired
}

export default Admin;

//React-Router automatically passes a location.pathname prop to components rendered in its <Route> tags.
