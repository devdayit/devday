import React, {Component} from "react";
import {Divider, Icon, Step} from "semantic-ui-react";
import GitHubDataService from "../GitHubDataService";
import {Link} from 'react-router-dom';
import Moment from "react-moment";

class RandomVideo extends Component {

    constructor(props)
    {
        super(props);
        this.state = {};
    }

    componentDidMount()
    {
        var gitHubDataService = new GitHubDataService();
        gitHubDataService
                .list("pastEvents")
                .then(list =>
                {
                    this.random(list, this.randomIndex(list), gitHubDataService);
                });
    }

    randomIndex(list)
    {
        return Math.floor(Math.random() * (list.length - 1));
    }

    random(list, randomIndex, gitHubDataService)
    {
        let key = list[randomIndex];
        key && gitHubDataService
                .read("pastEvents", key)
                .then(event =>
                {
                    if (event && event.youtube)
                    {
                        this.setState({key, event})
                    } else
                    {
                        setTimeout(() => this.random(list, this.randomIndex(list), gitHubDataService), 500);
                    }
                });
    }

    render()
    {
        var {event, key} = this.state;
        return (
                <div>
                    {event && event.youtube && <div>
                        <Divider horizontal>Time machine</Divider>
                        <Step.Group fluid>
                            <Step active style={{width: "50%"}}>
                                <Icon name='video'/>
                                <Step.Content>
                                    <Step.Title>
                                        <Link to={`/past-event/${key.substring(0, key.length - 5)}`}>{event.name} - {event.speaker}</Link>
                                    </Step.Title>
                                    <Step.Description>
                                        Ritorna a <Moment fromNow locale="IT">{event.date}</Moment> e rivivi questo talk!
                                    </Step.Description>
                                </Step.Content>
                            </Step>
                            <Step style={{width: "50%"}}>
                                <Step.Content style={{width: "100%"}}>
                                    <div className="videowrapper">
                                        <iframe width={560} height={315} src={`https://www.youtube.com/embed/${event.youtube}?autoplay=1`} frameBorder={0} allowFullScreen/>
                                    </div>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                    </div>}
                </div>
        );
    }
}

export default RandomVideo;