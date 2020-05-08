// Dependancies
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

// components
import Main from "./components/main";
import ProjectDeets from "./components/postDeets";

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Node API Sprint Challenge</h2>
        <h1>Stretch!</h1>
      </header>

      <Switch>
        <Route path="/project/:id" component={ProjectDeets} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
