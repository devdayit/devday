import React, {Component} from "react";
import {Card, Feed, Reveal, Image, Divider, Grid, Icon, Header, Step, Dimmer, Loader} from "semantic-ui-react";
import Communities from "../data/Communities";
import {Link} from "react-router-dom";
import GitHubDataService from "../GitHubDataService";
import _ from "underscore";
import Moment from "react-moment";
import PageHeader from "../components/PageHeader";
import {extendObservable} from "mobx";
import {observer} from "mobx-react";


const Home = observer(class Home extends Component {

    constructor(props)
    {
        super(props);
        extendObservable(this, {
            upcomingEvents: [],
            loadingEvents: false
        });
        this.style = {pastEvents: {textAlign: "right"}};
    }

    componentDidMount()
    {
        var gitHubDataService = new GitHubDataService();
        gitHubDataService.list("upcomingEvents").then(list =>
        {
            this.loadingEvents = true;
            list.forEach(item => gitHubDataService.read("upcomingEvents", item).then(content =>
            {
                content.key = item.substring(0, item.length - 5);
                this.upcomingEvents.push(content);
                this.upcomingEvents = _.sortBy(this.upcomingEvents, 'date');
                this.loadingEvents = false;
            }));
        });
    }

    render()
    {
        const nextEvent = this.upcomingEvents.length > 0 && this.upcomingEvents[0];
        return (
                <div>
                    <PageHeader>
                        <Dimmer inverted active={this.loadingEvents}>
                            <Loader inverted>Il prossimo evento sarà il...</Loader>
                        </Dimmer>
                        {nextEvent && <Step.Group fluid>
                            <Step active>
                                <Icon name='calendar'/>
                                <Step.Content>
                                    <Step.Title>
                                        Prossimo evento
                                    </Step.Title>
                                    <Step.Description>
                                        <Moment fromNow locale="IT">{nextEvent.date}</Moment>
                                    </Step.Description>
                                </Step.Content>
                            </Step>
                            <Step style={{flex: "initial"}} href={nextEvent.url}>
                                <Step.Content>
                                    <Step.Title>
                                        {nextEvent.name}
                                    </Step.Title>
                                    <Step.Description>
                                        {nextEvent.community}
                                    </Step.Description>
                                </Step.Content>
                            </Step>
                        </Step.Group>}
                    </PageHeader>
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
                    <Grid columns={2} stackable>
                        <Grid.Column key={1}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>
                                        <Grid columns={2}>
                                            <Grid.Column key={1}>
                                                Prossimi Eventi
                                            </Grid.Column>
                                            <Grid.Column key={2} style={this.style.pastEvents}>
                                                <Link to="/past-events">(Eventi Passati)</Link>
                                            </Grid.Column>
                                        </Grid>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <Dimmer inverted active={this.loadingEvents}>
                                        <Loader inverted>Qualche secondo e sono pronto...</Loader>
                                    </Dimmer>
                                    <Feed>
                                        {this.upcomingEvents.map(event => <Feed.Event
                                                href={event.url}
                                                image={event.logo}
                                                key={event.name}
                                                date={<Moment locale="IT" format=" Do MMMM YYYY @ HH:mm">{event.date}</Moment>}
                                                summary={event.name}
                                                extraText={event.location}/>)}
                                    </Feed>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column key={2}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>
                                        Social
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <Card.Group itemsPerRow="2">
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
                        </Grid.Column>
                    </Grid>
                    <Divider horizontal/>
                    <Step.Group fluid>
                        <Step active>
                            <Icon name='chat'/>
                            <Step.Content>
                                <Step.Title>
                                    Ti piace parlare? Conosci molto bene qualche tecnologia o framework? <br />Proponi un tuo intervento!
                                </Step.Title>
                            </Step.Content>
                        </Step>
                        <Step style={{flex: "initial"}}>
                            <Step.Content>
                                La comunità si muove intorno agli incontri e alla condivisione della conoscenza. Per questo abbiamo sempre bisogno di persone che vogliono parlare di sviluppo software alla nostra comunità. Se sei interessato scrivi a&nbsp;
                                <a href="mailto:devdays@devday.it">devdays@devday.it</a>. Grazie!
                            </Step.Content>
                        </Step>
                    </Step.Group>
                    <Step.Group fluid>
                        <Step active>
                            <Icon name='hand peace'/>
                            <Step.Content title='Vuoi essere un nostro sponsor?'/>
                        </Step>
                        <Step style={{flex: "initial"}}>
                            <Step.Content>
                                In un mondo sempre più virtuale abbiamo deciso di incontrarci in "analogico". Per questo abbiamo bisogno di spazi dove incontrarci o aziende che possano sponsorizzare le spese di locazione. Vuoi dare una mano? Scrivi a&nbsp;
                                <a href="mailto:devdays@devday.it">devdays@devday.it</a>.
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </div>
        );
    }
})

export default Home;
