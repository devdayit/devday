import React, {Component} from "react";
import GitHubDataService from "../GitHubDataService";
import {Grid, Header, Segment, Button, Icon} from "semantic-ui-react";
import {Link} from 'react-router-dom';

class PastEvent extends Component {

    constructor(props)
    {
        super(props);
        this.style = {
            subtitle: {
                color: "#e0e1e1",
            }
        };
        this.state = {};
    }

    componentDidMount()
    {
        var gitHubDataService = new GitHubDataService();
        gitHubDataService
                .read("pastEvents", this.props.match.params.eventId + ".json")
                .then(event => this.setState({event}));
    }

    render()
    {
        let event = this.state.event;
        return event ? <div>
                    <Segment.Group horizontal>
                        <Segment>
                            <Link to="/past-events">
                                <Button animated fluid>
                                    <Button.Content visible><Icon name='left arrow'/></Button.Content>
                                    <Button.Content hidden>
                                        Back
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Segment>
                        <Segment>
                            <Header size="huge">{event.name} - {event.speaker}</Header>
                        </Segment>
                        <Segment>
                            <Header size="small" style={this.style.subtitle}>{event.date} <br /> {event.location}</Header>
                        </Segment>
                    </Segment.Group>
                    <p>{event.description}</p>
                    <Grid columns={2} stackable>
                        {event.slides && <Grid.Column>
                            <iframe src={`https://www.slideshare.net/slideshow/embed_code/key/${event.slides}`} width={595} height={485} frameBorder={0} marginWidth={0} marginHeight={0} scrolling="no" style={{
                                border: '1px solid #CCC',
                                borderWidth: 1,
                                marginBottom: 5,
                                maxWidth: '100%'
                            }} allowFullScreen/>
                        </Grid.Column>}
                        {event.youtube && <Grid.Column>
                            <iframe width={560} height={315} src={`https://www.youtube.com/embed/${event.youtube}`} frameBorder={0} allowFullScreen/>
                        </Grid.Column>}
                    </Grid>
                </div> : <div />
    }
}

export default PastEvent;
