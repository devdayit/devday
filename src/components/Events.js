import React from "react";
import {Card, Dimmer, Feed, Grid, Icon, Loader} from "semantic-ui-react";
import Moment from "react-moment";

class Events extends React.Component {
  constructor (props) {
    super(props);
    this.style = {'pastEvents': {'textAlign': 'right'}};
  }

  render () {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Grid columns={2}>
              <Grid.Column key={1}>
                Prossimi Eventi
              </Grid.Column>
            </Grid>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Dimmer inverted active={this.loadingEvents}>
            <Loader inverted>Qualche secondo e sono pronto...</Loader>
          </Dimmer>
          <Feed>
            {(this.props.events).map(
              event => (
                <Feed.Event
                  href={event.url}
                  image={event.friend ? <Icon name="handshake outline"/> : event.logo}
                  key={event.id || event.name}
                  date={<Moment locale="IT" format=" Do MMMM YYYY @ HH:mm">{event.date}</Moment>}
                  summary={event.name}
                  extraText={event.location}
                />
              )
            )}
            {this.props.events.length === 0 && <div>Non ci sono eventi in programma, ma ci stiamo lavorando ;)</div>}
          </Feed>
          <span className="meta">Gli eventi contrassegnate dall'icona <Icon name="handshake outline"/> sono organizzate da community amiche.</span>
        </Card.Content>
      </Card>
    );
  }

}

export default Events;
