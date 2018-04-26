import React from 'react';
import { Link } from 'react-router-dom';

const bloodOrange = "#FE5000";
let styles = {
  header: {
    display: "grid",
    backgroundColor: bloodOrange,
    height: "48",
    gridTemplateColumns: "1fr 4fr 1fr 4fr 1fr",
    margin: "auto",
    textAlign: "center"
  },
  headerText: {
    margin: "auto",
    textAlign: "center"
  }
}

const Header = () => {
  return(
    <div>
      <style>{`
        #queue{
          margin-top: auto;
          margin-bottom: auto;
          color: white;
        }
      `}
      </style>
      <div style={styles.header}>
        <p style={styles.headerText}><Link to="/">Home</Link></p>
        <br/>
        <h2 id="queue">Queue</h2>
        <br/>
        <p style={styles.headerText}><Link to="/newticket">Add ticket</Link></p>
      </div>
    </div>
  )
}

export default Header;
