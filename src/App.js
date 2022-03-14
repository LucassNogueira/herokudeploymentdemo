import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const accessDB = () => {
    axios.get("/api/info").then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{name ? name : "No product..."}</h2>
        <h3>{price ? price : "No Price..."}</h3>
        <button onClick={accessDB}>Access Db</button>
      </header>
    </div>
  );
}

export default App;
