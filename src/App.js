import React, {Component} from "react";
import "./App.css";
import {Container} from "semantic-ui-react";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./pages/Home";
import PastEvents from "./pages/PastEvents";
import PastEvent from "./pages/PastEvent";
import {HashRouter as Router, Route} from "react-router-dom";

class App extends Component {

    render()
    {
        return (
                <Router>
                    <div className="container">
                        <PageHeader/>
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
