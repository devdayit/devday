import React, {Component} from "react";
import GitHubDataService from "../GitHubDataService";
import _ from "underscore";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import Events from "../components/Events";

const NextEvents = observer(class NextEvents extends Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      'upcomingEvents': [],
      'loadingEvents' : false,
    });
  }

  componentDidMount() {
    const gitHubDataService = new GitHubDataService();
    gitHubDataService.list("upcomingEvents")
      .then(
        (list) => {
          this.loadingEvents = true;

          (list).map(
            (item) => gitHubDataService.read("upcomingEvents", item)
              .then(
                (content) => {
                  this.loadingEvents = false;

                  content.key = item.substring(0, item.length - 5);
                  this.upcomingEvents.push(content);
                  this.upcomingEvents = _.sortBy(this.upcomingEvents, 'date');
                }
              )
          );
        }
      );
  }

  render() {
    return (
      <Events events={this.upcomingEvents} />
    );
  }
})

export default NextEvents;
