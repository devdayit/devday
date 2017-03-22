import React, {Component} from "react";
import {Card, Feed, Reveal, Image, Divider, Grid, Icon, Header} from "semantic-ui-react";
import Communities from "../data/Communities";
import Events from "../data/Events";
import Sponsors from "../data/Sponsors";
import {Link} from "react-router-dom";

class Home extends Component {

    constructor(props)
    {
        super(props);
        this.style = {pastEvents: {textAlign: "right"}};
    }

    render()
    {
        return (
                <div>
                    <Divider horizontal>Le nostre comunità</Divider>
                    <Card.Group itemsPerRow={Communities.length} className="communities" stackable>
                        {Communities.map(community => <Card color={community.color} key={community.name}>
                            <Card.Content>
                                <Reveal animated='move'>
                                    <Reveal.Content visible>
                                        <Image src={community.logo}/>
                                    </Reveal.Content>
                                    <Reveal.Content hidden>
                                        <Header size='medium'>{community.description}</Header>
                                        {community.meetup && <a href={community.meetup}> <Icon circular name='meetup' size='big' link/></a>}
                                        {community.eventbrite && <a href={community.eventbrite}> <Icon circular name='calendar' size='big' link/></a>}
                                        {community.facebook && <a href={community.facebook}> <Icon circular name='facebook official' size='big' link/></a>}
                                    </Reveal.Content>
                                </Reveal>
                            </Card.Content>
                        </Card>)}
                    </Card.Group>
                    <Divider horizontal/>
                    <Card.Group itemsPerRow={2} stackable>
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    <Grid columns={2}>
                                        <Grid.Column key={1}>
                                            Prossimi Eventi
                                        </Grid.Column>
                                        <Grid.Column key={2} style={this.style.pastEvents}>
                                            <Link to="/past-events">(eventi passati)</Link>
                                        </Grid.Column>
                                    </Grid>
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    {Events.map(event => <Feed.Event
                                            href={event.url}
                                            image={event.logo}
                                            key={event.name}
                                            date={event.date}
                                            summary={event.name}
                                            extraText={event.location}/>)}
                                </Feed>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    Social
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Card.Group>
                                    <Card fluid href="https://www.facebook.com/DevDay.it">
                                        <Card.Content>
                                            <Card.Header>
                                                <Icon name="facebook"/>Facebook
                                            </Card.Header>
                                        </Card.Content>
                                    </Card>
                                    <Card fluid href="https://twitter.com/DevDayit">
                                        <Card.Content>
                                            <Card.Header>
                                                <Icon name="twitter"/>Twitter
                                            </Card.Header>
                                        </Card.Content>
                                    </Card>
                                    <Card fluid href="https://www.youtube.com/channel/UCUmykbn_rG5dExSncCgW9Nw">
                                        <Card.Content>
                                            <Card.Header>
                                                <Icon name="youtube"/>YouTube
                                            </Card.Header>
                                        </Card.Content>
                                    </Card>
                                    <Card fluid href="https://slack.devday.it">
                                        <Card.Content>
                                            <Card.Header>
                                                <Icon name="slack"/>Slack
                                            </Card.Header>
                                        </Card.Content>
                                    </Card>
                                    <Card fluid href="https://www.slideshare.net/DevDay_it">
                                        <Card.Content>
                                            <Card.Header>
                                                <Icon name="slideshare"/>SlideShare
                                            </Card.Header>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                    <Divider horizontal>Sponsor</Divider>
                    <Card.Group itemsPerRow={5} className="sponsors" stackable>
                        {Sponsors.map(sponsor => <Card href={sponsor.url} key={sponsor.name}>
                            <Image
                                    src={sponsor.logo}
                                    centered/>
                            <Card.Content>
                                <Card.Header>{sponsor.name}</Card.Header>
                                <Card.Description>{sponsor.description}</Card.Description>
                            </Card.Content>
                        </Card>)}
                    </Card.Group>
                </div>
        );
    }
}

export default Home;
