import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../home/TicketList';
import TicketDetails from './TicketDetails';
import { connect } from 'react-redux';

const Admin = (props) => {
  let optionalSelectedTicketContent = null;
  if(props.selectedTicket.length > 0){
    optionalSelectedTicketContent = <TicketDetails selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);

//React-Router automatically passes a location.pathname prop to components rendered in its <Route> tags.
