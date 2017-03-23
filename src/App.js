import React, {Component} from "react";
import "./App.css";
import {Container} from "semantic-ui-react";
import PageFooter from "./components/PageFooter";
import Home from "./pages/Home";
import PastEvents from "./pages/PastEvents";
import PastEvent from "./pages/PastEvent";
import {HashRouter as Router, Route} from "react-router-dom";
import GitHubForkRibbon from 'react-github-fork-ribbon';

class App extends Component {

    render()
    {
        return (
                <Router>
                    <div className="container">
                        <GitHubForkRibbon position="right"
                                          color="green"
                                          href="https://github.com/devdayit/devday"
                                          target="_blank" >
                            Fork me on GitHub!
                        </GitHubForkRibbon>
                        <Container fluid>
                            <Route exact path="/" component={Home}/>
                            <Route path="/past-events" component={PastEvents}/>
                            <Route path="/past-event/:eventId" component={PastEvent}/>
                        </Container>
                        <PageFooter/>
                    </div>
                </Router>
        );
    }
}

export default App;
