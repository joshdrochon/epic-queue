import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../home/TicketList';
import TicketDetails from './TicketDetails';

const Admin = (props) => {
  let optionalSelectedTicketContent = null;
  if(props.selectedTicket != null){
    console.log(props.selectedTicket);
    optionalSelectedTicketContent = <TicketDetails selectedTicket={props.selectedTicket}/>;
  }

  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.object
}

export default Admin;

//React-Router automatically passes a location.pathname prop to components rendered in its <Route> tags.
