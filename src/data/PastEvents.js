import logoNA from "../images/NA-DEV-DAY_logo.png";

const PastEvents = {
    chatbot: {
        logo: logoNA,
        name: "A chatbot from scratch",
        speaker: "Carlo De Maio",
        url: "https://www.eventbrite.com/e/7-devday-chatbot-webrtc-tickets-31106271696#",
        date: "18/02/2017",
        description: "Vuoi imparare a realizzare un chat bot che funziona sulle più note piattaforme come Facebook Messenger, Telegram, Slack, Kik e altre? Vuoi che sia context aware e capace di tradurre il linguaggio umano in azioni? Allora questo è il talk che fa per te!",
        youtube: "-KsuFCQgWm8",
        slides: "2htOC0iJp9jL2n"
    },
    openshift: {
        logo: logoNA,
        name: "Developing Microservices with Openshift Container Platform",
        speaker: "Ugo Landini",
        url: "https://www.eventbrite.com/e/8-devday-developing-microservices-with-openshift-container-platform-tickets-31852766482#",
        date: "08/02/2017",
        description: "Abstract: Openshift is an Enterprise version of Kubernetes and Containers are commonly seen as \"the new Application Servers\": in this talk we'll look at how twelve factor moves @ the infrastructure level with the help of OCP. We’ll look at Java, Vertx, Spring Boot & Golang code and how we can manage the whole thing form a single pane of glass.",
        youtube: "DR_PLIgagl8",
    },
    bootstrap4: {
        logo: logoNA,
        name: "Bootstrap 4 is coming!",
        speaker: "Carmine Alfano",
        url: "https://www.eventbrite.com/e/9-devday-bootstrap-4-is-coming-tickets-32399217933#",
        date: "08/03/2017",
        description: "Diventato ormai uno standard nello sviluppo web, Bootstrap è lo strumento più importante da conoscere per uno sviluppatore web. In questo talk vedremo, con un approccio molto pratico, le novità della versione 4 analizzando la nuova gestione del grid system basato sul modulo flexbox, entreremo poi nel dettaglio della stilizzazione grafica avanzata attraverso SASS. Scopriremo infine come migrare dalla versione di Bootstrap 3 alla 4.",
        youtube: "IsJ9FLiUv3s",
    },
    janus: {
        logo: logoNA,
        name: "Janus: un server WebRTC open source e \"general purpose\"",
        speaker: "Lorenzo Miniero",
        url: "https://www.eventbrite.com/e/7-devday-chatbot-webrtc-tickets-31106271696#",
        date: "08/03/2017",
        description: "Janus è un server WebRTC open source e modulare, concepito per essere a tutti gli effetti uno strumento \"general purpose\" per la realizzazione di complessi scenari multimediali. In quanto tale, si presta a supportare applicazioni di vario tipo, a partire da scenari più tradizionali quali conferencing, e-learning e streaming multimediale, per arrivare ad applicazioni più innovative che coinvolgano dispositivi eterogenei. La presentazione partirà da una breve panoramica su WebRTC, per coprire poi l'architettura di Janus e le possibili topologie di utilizzo, fino a presentare alcuni esempi reali di utilizzo e casi d'uso di successo.",
        youtube: "gArqopeNQY0",
        slides: "zAseZvvpDukFbg",
    },
    csp: {
        logo: logoNA,
        name: "Gestione dei flussi asincroni con CSP",
        speaker: "Vincenzo Chianese",
        url: "https://www.eventbrite.com/e/6-devday-gestione-dei-flussi-asincroni-con-csp-tickets-29739171663#",
        date: "22/12/2016",
        description: "Il software deve affrontare flussi di controllo complicati, soprattutto quando utilizziamo linguaggi per fortemente asincroni come Javascript, piattaforme come NodeJS o tecniche di reactive programming. Diverse sono le tecniche per gestirli: callbacks, promises e streams. La soluzione scelta ha un impatto profondo sul codice. Le cose possono però essere semplificate con una singola astrazione visto che il problema sottostante è lo stesso: la coordinazione della concorrenza. Con il pattern CSP (Communicating sequential processes) e il concetto di Channels scopriremo come risolvere questo problema.",
        youtube: "hcJM0Ut0bgc",
    }
};

export default PastEvents;
