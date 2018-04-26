import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    link: {
      marginTop: '10px',
      marginBottom: '10px'
    },
    footer: {
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      backgroundColor: '#FE5000',
      textAlign: 'center',
      height: '38px'
    }
  }
  return(
    <div style={styles.footer}>
      <p style={styles.link}><Link to="/easteregg">?</Link></p>
    </div>
  )
}
export default Footer;
