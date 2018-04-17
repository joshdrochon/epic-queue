import React from 'react';

function Header(){
  return(
    <div>
      <style jsx>{`
          #header h2{
            margin: 0px;
            width: 100%;
            text-align: center;
            font-family: helvetica;
            background-color: #FE5000;
            font-weight: lighter;
            padding: 20px 0px 20px 0px;
            color: white;
          }
          #stats{
            width: max-content;
            margin: auto;
            color: blue;
            padding: 10px;
          }
      `}
      </style>
      <div id="header">
        <h2>Queue</h2>
      </div>
      <p id="stats">View today's statistics</p>
    </div>
  )
}

export default Header;
