import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import Moment from 'moment';

import { Link } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime(){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList})
  }

  handleAddingNewTicketToList(newTicket){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return(
      <div>
        <style jsx>{`
          *{
              margin:0px;
              padding:0px;
              font-family: helvetica;
              font-weight: lighter;
            }
            body{
              background-color: white;
            }
            #footer{
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              background-color: #FE5000;
              text-align: center;
              height: 38px;
            }
          `}
        </style>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            <Route path='/admin' component={Admin}/>
            <Route component={Error404}/>
          </Switch>
          <Footer/>
      </div>
    );
  }

}

export default App;
