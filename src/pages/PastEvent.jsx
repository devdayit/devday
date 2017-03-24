import React, {Component} from "react";
import GitHubDataService from "../GitHubDataService";
import {Grid, Header, Button, Icon} from "semantic-ui-react";
import {Link} from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import Moment from "react-moment";

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
                    <PageHeader/>
                    <Grid verticalAlign="middle" stackable celled columns={3}>
                        <Grid.Column width={3}>
                            <Link to="/past-events">
                                <Button animated fluid>
                                    <Button.Content visible><Icon name='left arrow'/></Button.Content>
                                    <Button.Content hidden>
                                        Back
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header size="huge">{event.name} - {event.speaker}</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header size="small" style={this.style.subtitle}><Moment format="DD/MM/YYYY">{event.date}</Moment> <br /> {event.location}</Header>
                        </Grid.Column>
                    </Grid>
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
