import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Admin from './Admin';
import Error404 from './Error404';

import { Link } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';


function App(){
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
            background-color: lightgray;
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
          <Route exact path='/' component={TicketList}/>
          <Route path='/newticket' component={NewTicketForm}/>
          <Route path='/admin' component={Admin}/>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
