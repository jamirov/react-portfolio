import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Learn from "./pages/Learn"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container" >
        <NavTabs />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/learn" component={Learn} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
