import React, {Component} from "react";
import {Card, Image, Divider} from "semantic-ui-react";
import Sponsors from "../data/Sponsors";

class PageHeader extends Component {

    render()
    {
        return (
                <div>
                    <Divider horizontal>Sponsor</Divider>
                    <Card.Group itemsPerRow={4} className="sponsors" stackable>
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

export default PageHeader;