import React, { Component } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import PageFooter from "./components/PageFooter";
import Home from "./pages/Home";
import PastEvents from "./pages/PastEvents";
import PastEvent from "./pages/PastEvent";
import NextEvents from "./pages/NextEvents";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GitHubForkRibbon from "react-github-fork-ribbon";
import RandomVideo from "./components/RandomVideo";
import Sponsors from "./components/Sponsors";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ScrollToTopOnMount />
          <GitHubForkRibbon
            position="left-bottom"
            color="green"
            href="https://github.com/devdayit/devday"
            target="_blank"
          >
            Fork me on GitHub!
          </GitHubForkRibbon>
          <Container fluid>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={NextEvents} />
            <Route path="/past-events" component={PastEvents} />
            <Route path="/past-event/:eventId" component={PastEvent} />
          </Container>
          <RandomVideo />
          <Sponsors />
          <PageFooter />
        </div>
      </Router>
    );
  }
}

export default App;

class ScrollToTopOnMount extends Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
