import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route} from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  return(
    <div>
      <style jsx>{`
        *{
            margin:0px;
            padding:0px;
          }
          body{
            background-color: lightgray;
          }
        `}
      </style>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={TicketList}/>
          <Route path='/newticket' component={NewTicketForm}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
