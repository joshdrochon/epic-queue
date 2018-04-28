import React from 'react';
import Header from './home/Header';
import Footer from './home/Footer';
import TicketList from './home/TicketList';
import NewTicketControl from './ticket/NewTicketControl';
import EasterEgg from './ux/EasterEgg';
import Error404 from './admin/Error404';
import Moment from 'moment';
import Admin from './admin/Admin';

import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    //one state object, composed of two state slices
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime(){
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    let newTicketId = v4();
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
    console.log('You have selected ' + this.state.selectedTicket.name + "'s ticket, who currently on " + this.state.selectedTicket.location + ' has the following issue: ' + this.state.selectedTicket.issue + ' as of ' + this.state.selectedTicket.formattedWaitTime + ' ago.');
  }

  render(){
    console.log(this.state.masterTicketList);
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
            <Route exact path ='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
            <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            <Route path='/easteregg' component={EasterEgg}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
      </div>
    );
  }

}

export default App;
