import React, {Component} from "react";
import {Divider, Image, Step} from "semantic-ui-react";
import GitHubDataService from "../GitHubDataService";
import {Link} from 'react-router-dom';
import Moment from "react-moment";
import delorean from '../images/delorean.png';
import ScrollMonitor from "scrollmonitor";
import {extendObservable} from "mobx";
import {observer} from "mobx-react";

const RandomVideo = observer(class RandomVideo extends Component {

    constructor(props)
    {
        super(props);
        extendObservable(this, {
            videoVisible: false,
            video: {}
        });
    }

    componentDidMount()
    {
        var gitHubDataService = new GitHubDataService();
        gitHubDataService
                .list("pastEvents")
                .then(list =>
                {
                    this.random(list, this.randomIndex(list), gitHubDataService);
                });
        if (this.stepElement)
        {
            var elementWatcher = ScrollMonitor.create(this.stepElement);
            elementWatcher.enterViewport(() => (this.videoVisible = true));
            elementWatcher.exitViewport(() => (this.videoVisible = false));
        }
    }

    randomIndex(list)
    {
        return Math.floor(Math.random() * (list.length - 1));
    }

    random(list, randomIndex, gitHubDataService)
    {
        let key = list[randomIndex];
        key && gitHubDataService
                .read("pastEvents", key)
                .then(event =>
                {
                    if (event && event.youtube)
                    {
                        this.video = ({key, event});
                    } else
                    {
                        setTimeout(() => this.random(list, this.randomIndex(list), gitHubDataService), 500);
                    }
                });
    }

    render()
    {
        var {event, key} = this.video;
        return (
                <div ref={(element) => (this.stepElement = element) }>
                    {event && event.youtube && <div>
                        <Divider horizontal>Time machine</Divider>
                        <Step.Group fluid>
                            <Step active style={{width: "50%"}}>
                                <Image src={delorean}/>
                                <Step.Content>
                                    <Step.Title>
                                        <Link to={`/past-event/${key.substring(0, key.length - 5)}`}>{event.name} - {event.speaker}</Link>
                                    </Step.Title>
                                    <Step.Description>
                                        Ritorna a <Moment fromNow locale="IT">{event.date}</Moment> e rivivi questo talk!
                                    </Step.Description>
                                </Step.Content>
                            </Step>
                            <div className={this.videoVisible ? "normal-video" : "static-video"}>
                                <Step>
                                    <Step.Content style={{width: "100%"}}>
                                        <div className="videowrapper">
                                            <iframe width={560} height={315} src={`https://www.youtube.com/embed/${event.youtube}?autoplay=1`} frameBorder={0} allowFullScreen/>
                                        </div>
                                    </Step.Content>
                                </Step>
                            </div>
                        </Step.Group>
                    </div >}
                </div>
        );
    }
});

export default RandomVideo;