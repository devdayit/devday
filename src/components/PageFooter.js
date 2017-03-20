import React, {Component} from "react";
import {Divider, Icon} from "semantic-ui-react";

class PageFooter extends Component {

    constructor(props)
    {
        super(props);
        this.style = {footer: {color: "#e0e1e1"}};
    }

    render()
    {
        return (
                <Divider style={this.style.footer} horizontal><Icon name="leaf"/> A spontaneous developer community born in Campania since 2015</Divider>
        );
    }
}

export default PageFooter;