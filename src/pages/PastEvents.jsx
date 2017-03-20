import React, {Component} from "react";
import {Divider, List, Image} from "semantic-ui-react";
import Events from "../data/PastEvents";
import {Link} from 'react-router-dom';

class PastEvents extends Component {

    render()
    {
        let keys = Object.keys(Events);
        return (
                <div>
                    <Divider horizontal>Eventi passati</Divider>
                    <List size="huge">
                        {keys.map(key => <List.Item>
                            <Image avatar src={Events[key].logo} />
                            <List.Content>
                                <List.Description>{Events[key].date}</List.Description>
                                <Link to={`/past-event/${key}`}>{Events[key].name} - {Events[key].speaker}</Link>
                            </List.Content>
                        </List.Item>)}


                    </List>
                </div>
        );
    }
}

export default PastEvents;
