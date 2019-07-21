import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Inner from "./inner";
import Search from "./search";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Search} />
        <Route path="/inner/:id" exact component={Inner} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
