import React, {Component} from "react";
import logo from "../images/logo.png";
import {Grid, Image} from "semantic-ui-react";
import {Link} from 'react-router-dom';

class PageHeader extends Component {

    render()
    {
        return (
                <Grid columns={2} stackable>
                    <Grid.Column key={1}>
                        <Link to="/">
                            <Image src={logo}/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column key={2}>
                        <h2>Il punto di incontro degli sviluppatori in Campania</h2>
                        {this.props.children}
                    </Grid.Column>
                </Grid>
        );
    }
}

export default PageHeader;