import React from 'react';
import Header from './home/Header';
import Footer from './home/Footer';
import TicketList from './home/TicketList';
import NewTicketControl from './ticket/NewTicketControl';
import EasterEgg from './ux/EasterEgg';
import Error404 from './admin/Error404';
import Moment from 'moment';
import Admin from './admin/Admin';

import { Link } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  timer(timePassed){
    timePassed = document.getElementById('time-display');
    if(timePassed == 'a minute'){
      timePassed.classList.add('warning');
    }else{
      timePassed.classList.add('danger');
    }
    return timePassed;
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime(){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      this.timer(ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true))
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
        <style jsx>
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
            .primary{
              color: #428bca;
            }
            .warning{
              color: #f0ad4e;
            }
            .danger{
              #d9534f;
            }
          `}
        </style>
          <Header/>
          <Switch>
            <Route exact path ='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} />} />
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
