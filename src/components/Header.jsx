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
            background-color: orange;
            font-weight: lighter;
            padding: 20px 0px 20px 0px;
            color: white;
          }
      `}
      </style>
      <div id="header">
        <h2>Queue</h2>
      </div>
    </div>
  )
}

export default Header;
