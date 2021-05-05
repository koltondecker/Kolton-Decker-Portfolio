import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import {} from "materialize-css";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App container-fluid">
      <Header />
      <main>
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path ="/skills" component={Skills} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
