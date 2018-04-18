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
      <p style={styles.footer}><Link to="/admin">Admin</Link></p>
    </div>

  )
}
export default Footer;
