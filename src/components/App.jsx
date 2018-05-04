import { Link, Switch, Route, withRouter} from 'react-router-dom';

import React from 'react';
import Header from './home/Header';
import Footer from './home/Footer';
import TicketList from './home/TicketList';
import NewTicketControl from './ticket/NewTicketControl';
import EasterEgg from './ux/EasterEgg';
import Error404 from './admin/Error404';
import Moment from 'moment';
import Admin from './admin/Admin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    console.log(this.props.masterTicketList);
    return(
      <div>
        <style global jsx>
          {`
            *{
              margin:0px;
              padding:0px;
              font-family: helvetica;
              font-weight: lighter;
            }
            body{
              background-color: white;
            }
            a{
              color: white;
              text-decoration: none;
            }
          `}
        </style>
          <Header/>
          <Switch>
            <Route exact path ='/' render={()=><TicketList
              ticketList={this.props.masterTicketList} />}
            />
            <Route path='/admin' render={(props)=><Admin
              currentRouterPath={props.location.pathname}/>}
            />
            <Route path='/newticket' render={()=><NewTicketControl
              onNewTicketCreation={this.handleAddingNewTicketToList} />}
            />
            <Route path='/easteregg' component={EasterEgg}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
