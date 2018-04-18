import React from 'react';
import { Link } from 'react-router-dom';

const bloodOrange = "#FE5000";
let styles = {
  header: {
    display: "grid",
    backgroundColor: bloodOrange,
    gridTemplateColumns: "1fr 4fr 1fr 4fr 1fr",
    margin: "auto",
    textAlign: "center"
  },
  headerText: {
    margin: "auto",
    textAlign: "center"
  }

}

function Header(){
  return(
    <div>
      <div style={styles.header}>
        <p style={styles.headerText}><Link to="/">Home</Link></p>
        <br/>
        <h2>Queue</h2>
        <br/>
        <p style={styles.headerText}><Link to="/newticket">Add ticket</Link></p>
      </div>
    </div>
  )
}

export default Header;
