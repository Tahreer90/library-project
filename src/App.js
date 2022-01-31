import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import bookStore from "./stores/bookStore";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url("https://static.toiimg.com/photo/80507427.cms")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
