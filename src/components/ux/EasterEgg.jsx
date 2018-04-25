import React from 'react';

const styles = {
  grid: {
    display: "grid",
    width: "700px",
    height: "700px",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    textAlign: "center",
    margin: "auto",
    marginTop: "100px",
    gridGap: "1px"
  },
  cell: {
    width: "200px",
    height: "200px",
    border: "1px solid black",
    lineHeight: "200px",
    margin: "auto"
  }
}

function Admin(){
  console.log('Hey now brown cow');
  return(
    <div>
      <style jsx>{`
          #grid div:hover{
            cursor: pointer;
            transform: scale(1.03);
            box-shadow: 8px 5px 20px gray;
          }
          #c1:hover{
            background-color: peru;
          }
          #c2:hover{
            background-color: red;
          }
          #c3:hover{
            background-color: ghostwhite;
          }
          #c4:hover{
            background-color: green;
          }
          #c5:hover{
            background-color: magenta;
          }
          #c6:hover{
            background-color: orange;
          }
          #c7:hover{
            background-color: purple;
          }
          #c8:hover{
            background-color: yellow;
          }
          #c9:hover{
            background-color: blue;
          }
        `}
      </style>
      <div id="grid" style={styles.grid}>
        <div id="c1" style={styles.cell}></div>
        <div id="c2" style={styles.cell}></div>
        <div id="c3" style={styles.cell}></div>
        <div id="c4" style={styles.cell}></div>
        <div id="c5" style={styles.cell}></div>
        <div id="c6" style={styles.cell}></div>
        <div id="c7" style={styles.cell}></div>
        <div id="c8" style={styles.cell}></div>
        <div id="c9" style={styles.cell}></div>
      </div>
    </div>

  )
}

export default Admin;
