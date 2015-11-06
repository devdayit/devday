import React from "react";
import { Link } from "react-router";
import EntaksLogo from './img/entaksi.gif';
import ReworkLogo from './img/rework.png';
import Mario from './img/mario.jpg';
import Foto from './img/foto.jpg';
import {GoogleMap, Marker, InfoWindow} from "react-google-maps";
import InfoBox from "react-google-maps/lib/addons/InfoBox";
import './main.css';
import {
        Code,
        CustomerQuote, CustomerQuotes,
        DropdownMenu, DropdownToggle,
        Footer, FooterAddress,
        Hero,
        HorizontalSplit,
        ImageList, ImageListItem,
        Navbar, NavItem,
        Page,
        PricingPlan, PricingTable,
        Section,
        SignupInline, SignupModal,
        Stripe,
        Team,
        TeamMember,
} from "neal-react";

const brandName = "DevDay";
const brand = <span>{brandName}</span>;

export default (props) =>
{
  var position = {lat: 40.856973, lng:14.282034};
    return (
            <Page>

           <Navbar brand={brand}>
        <NavItem><a href="#interventi" className="nav-link">Interventi</a></NavItem>
        <NavItem><a href="#quando" className="nav-link">Quando?</a></NavItem>
        <NavItem><a href="#dove" className="nav-link">Dove?</a></NavItem>
        <NavItem><a href="#partecipa" className="nav-link">Prenota gratuitamente</a></NavItem>
      </Navbar>
                <Hero backgroundImage={Foto}
                      className="text-center">
                    <h1 className="display-1"> Napoli DevDay </h1>

                    <p className="lead">Un giorno al mese per parlare di sviluppo software e non solo.</p>

                    <p>
                        <time datetime="2015-11-16" className="icon">
                            <em>Marted&igrave;</em>
                            <strong>Marzo</strong>
                            <span>15</span>
                        </time>
                        <a href="#partecipa" className="btn btn-white btn-outline-inverse btn-lg">
                            Partecipa gratuitamente all'evento dedicato allo sviluppo software!
                        </a>
                    </p>
                </Hero>

                <Section heading="Interventi" className="gray" id="interventi">
                    <HorizontalSplit padding="md">
                        <div>
                            <p className="lead"><strong>From GoF to lambdas</strong></p>

                            <p>Il libro di design patterns noto come Gang of Four è stata una sorta di Bibbia per tutti gli sviluppattori della mia generazione. Il suo principale pregio è stato quello di darci un vocabolario comune: quando un programmatore dice "qui ho usato uno strategy pattern" tutti i colleghi sanno di cosa sta parlando. Il problema è che la maggior parte dei pattern elencati nel libro sono una finzione o meglio un workaround per sopperire ad un'astrazione mancante: le higher order functions. Con l'introduzione delle lambda expressions in Java 8 è finalmente possibile anche per gli sviluppatori Java liberarsi di questa non più necessaria sovrastruttura. Lo scopo del talk è mostrare, con una serie di esempi sviluppati in una live coding session, come reimplementare i più comuni e utilizzati pattern del GoF in modo più semplice e conciso con le lambda expression di Java 8.</p>

                            <p className="label label-primary label label-primary fa fa-clock-o fa-stack-1x fa-inverse"> 35 minuti</p>
                        </div>
                        <div>
                        <TeamMember name="Mario Fusco" imageUrl={Mario} style={{width:"80%"}}>
                                Mario is a senior software engineer at Red Hat working at the development of the core of Drools, the JBoss rule engine. He has a huge experience as Java developer having been involved in (and often leading) many enterprise level projects in several industries ranging from media companies to the financial sector. Among his interests there are also functional programming and Domain Specific Languages. He is also the co-author of "Java 8 in Action" published by Manning.                        
                            </TeamMember>
                        
                        </div>
                    </HorizontalSplit>
                </Section>

                <Section heading="Quando?" className="gray" id="quando">
                    
                        <p>L'evento si svolgerà il 15 marzo 2016 dalle ore 18.30 alle ore 20.00.</p>
                    
                </Section>

                <Section heading="Dove?" className="gray" id="dove">
                    <GoogleMap containerProps={{
                                  style: {
                                    height: "300px",
                                  },
                                }}
                               defaultZoom={16}
                               defaultCenter={position}>
                              <InfoWindow key="info" position={position} content="Re.work" />
                    </GoogleMap>
                    <br />
                    <p>L'evento si svolgerà presso Re.work in <a href="https://www.google.it/maps/dir//40.8569718,14.2820321/@40.8567705,14.2805591,343m/data=!3m1!1e3">Viale della Costituzione (Centro Direzionale) Is. E2  80143 Napoli</a>.</p>
                </Section>

                <Section heading="Partecipa!" className="gray" id="partecipa">
                    <div style={{width:"100%", 'text-align':"left"}}>
                        <iframe src="//eventbrite.com/tickets-external?eid=22333114948&ref=etckt" style={{border:"none"}} frameborder="0" height="300" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
                        <div style={{'font-family':"Helvetica, Arial", 'font-size':"10px", padding:"5px 0 5px", margin:"2px", width:"100%", 'text-align':"left"}}>
                            <a className="powered-by-eb" style={{'color': "#dddddd", 'text-decoration':"none"}} target="_blank" href="http://www.eventbrite.com/r/etckt">Powered by Eventbrite</a>
                        </div>
                    </div>
                </Section>

                <Section className="subhero" heading="Sponsor e partner" className="gray">
                    <ImageList centered>
                        <ImageListItem style={{height:"50px"}} src={ReworkLogo} url="http://www.reworkspace.it/"/>
                        <ImageListItem style={{height:"50px"}} src={EntaksLogo} url="http://www.entaksi.eu/"/>
                    </ImageList>
                </Section>

                <Footer brandName={brandName}>
                </Footer>
            </Page>
    );
};
