import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFeed from "./components/AddFeed";
import "bootstrap/dist/css/bootstrap.css";
import EditFeed from "./components/EditFeed";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/add" component={AddFeed} />
                <Route exact path="/edit/:id" component={EditFeed} />
                {/* <Route exact path="/singup" component={Singup} /> */}
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
