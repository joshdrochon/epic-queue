import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

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
        <TicketList/>
      </div>
    </div>
  );
}

export default App;
