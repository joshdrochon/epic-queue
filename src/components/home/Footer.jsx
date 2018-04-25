import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  const styles = {
    footer: {
      marginTop: "10px",
      marginBottom: "10px",
    }
  }
  return(
    <div id="footer">
      <style jsx>
        {`
          #easteregg{
            color: #FE5000;
          }
          #easteregg:hover{
            color: ghostwhite;
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
      <p style={styles.footer}><Link id='easteregg' to="/easteregg">x</Link></p>
    </div>

  )
}
export default Footer;
