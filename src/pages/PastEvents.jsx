import React, {Component} from "react";
import {Divider, List, Image} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import GitHubDataService from "../GitHubDataService";

class PastEvents extends Component {

    constructor(props)
    {
        super(props);
        this.state = {pastEvents: []};
    }

    componentDidMount()
    {
        var gitHubDataService = new GitHubDataService();
        gitHubDataService.list("pastEvents").then(list =>
        {
            list.forEach(item => gitHubDataService.read("pastEvents", item).then(content =>
            {
                var pastEvents = Object.assign([], this.state.pastEvents);
                content.key = item.substring(0, item.length - 5);
                pastEvents.push(content);
                this.setState({pastEvents});
            }));
        });
    }

    render()
    {
        return (
                <div>
                    <Divider horizontal>Eventi passati</Divider>
                    <List size="huge">
                        {this.state.pastEvents.map(event => <List.Item key={event.key}>
                            {event.logo && <Image avatar src={event.logo}/>}
                            <List.Content>
                                <List.Description>{event.date}</List.Description>
                                <Link to={`/past-event/${event.key}`}>{event.name} - {event.speaker}</Link>
                            </List.Content>
                        </List.Item>)}


                    </List>
                </div>
        );
    }
}

export default PastEvents;
