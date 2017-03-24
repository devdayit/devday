import React, {Component} from "react";
import {Divider, List, Image, Dimmer, Loader, Icon} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import GitHubDataService from "../GitHubDataService";
import _ from "underscore";
import Moment from "react-moment";
import PageHeader from "../components/PageHeader";

class PastEvents extends Component {

    constructor(props)
    {
        super(props);
        this.state = {pastEvents: [], loading: true};
    }

    componentDidMount()
    {
        var gitHubDataService = new GitHubDataService();
        gitHubDataService.list("pastEvents").then(list =>
        {
            this.setState({loading: true});
            list.forEach(item => gitHubDataService.read("pastEvents", item).then(content =>
            {
                var pastEvents = Object.assign([], this.state.pastEvents);
                content.key = item.substring(0, item.length - 5);
                pastEvents.push(content);
                pastEvents = _.sortBy(pastEvents, 'date').reverse();
                this.setState({pastEvents, loading: false});
            }));
        });
    }

    render()
    {
        return (
                <div>
                    <PageHeader/>
                    <Dimmer inverted active={this.state.loading}>
                        <Loader inverted>Aspetta un attimo...</Loader>
                    </Dimmer>
                    {!this.state.loading && <Divider horizontal>Eventi passati</Divider>}
                    <List size="huge">
                        {this.state.pastEvents.map(event => <List.Item key={event.key}>
                            {event.logo && <Image avatar src={event.logo}/>}
                            <List.Content>
                                <List.Description>
                                    <Moment format="DD/MM/YYYY">{event.date}</Moment> {event.youtube && <Icon size="small" name='video'/>} {event.slides && <Icon size="small" name='slideshare'/>}
                                </List.Description>
                                <Link to={`/past-event/${event.key}`}>{event.name} - {event.speaker}</Link>
                            </List.Content>
                        </List.Item>)}


                    </List>
                </div>
        );
    }
}

export default PastEvents;
