import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import {} from "materialize-css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  // const [currentPage, setCurrentPage] = useState("About");

  return (
    <Router>
    <div className="App container-fluid">
      <Header />
      <main>
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
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
