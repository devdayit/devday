import React, {Component} from "react";
import PastEvents from "../data/PastEvents";
import {Grid, Header, Segment, Embed, Button, Icon} from "semantic-ui-react";
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
    }

    render()
    {
        let eventId = this.props.match.params.eventId;
        let event = PastEvents[eventId];
        return (
                <div>
                    <Segment.Group horizontal>
                        <Segment>
                            <Link to="/past-events">
                                <Button animated fluid>
                                    <Button.Content visible><Icon name='left arrow' /></Button.Content>
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
                        <Grid.Column>
                            <iframe src="//www.slideshare.net/slideshow/embed_code/key/2htOC0iJp9jL2n" width={595} height={485} frameBorder={0} marginWidth={0} marginHeight={0} scrolling="no" style={{border: '1px solid #CCC', borderWidth: 1, marginBottom: 5, maxWidth: '100%'}} allowFullScreen/>
                            <div style={{marginBottom: 5}}><strong> <a href="{event.slides}" title="A chatbot from scratch" target="_blank">A chatbot from scratch</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/DevDay_it">DevDay</a></strong></div>
                        </Grid.Column>
                        <Grid.Column>
                            <iframe width={560} height={315} src={`https://www.youtube.com/embed/${event.youtube}`} frameBorder={0} allowFullScreen/>
                        </Grid.Column>
                    </Grid>

                </div>
        );
    }
}

export default PastEvent;
