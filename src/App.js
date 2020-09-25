import React from "react";
import img from "./assets/img/me.jpg";
import "./App.scss";

function App() {
  let links = require("./assets/data/links.json");
  return (
    <div className="container">
      <div className="header">
        <img className="me" src={img} alt="Image of mine" />
        <h2 className="title">Thorben</h2>
      </div>
      <div className="body">
        <div className="link-container">
          {links.map((link, i) => {
            return (
              <a className="link" href={link.url} key={i}>
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
