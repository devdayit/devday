import React, { Component } from "react";
import _ from "underscore";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import Events from "../components/Events";

const NextEvents = observer(
  class NextEvents extends Component {
    constructor(props) {
      super(props);
      extendObservable(this, {
        upcomingEvents: [],
        loadingEvents: false,
      });
    }

    async componentDidMount() {
      this.loadingEvents = true;
      try {
        const events = await fetch(
          "https://meetupapi.netlify.com/.netlify/functions/proxy"
        ).then((res) => res.json());
        this.upcomingEvents.push(...events);
        this.upcomingEvents = _.sortBy(this.upcomingEvents, "time");
      } catch (error) {
        console.log(error);
      }
      this.loadingEvents = false;
    }

    render() {
      return <Events events={this.upcomingEvents} />;
    }
  }
);

export default NextEvents;
