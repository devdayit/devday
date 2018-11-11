import logoNAImage from './images/NA-DEV-DAY_logo.png';
import logoSAImage from './images/SA-DEV-DAY_logo.png';
import logoBNImage from './images/BN-DEV-DAY_logo.png';
import logoAVImage from './images/AV-DEV-DAY_logo.png';
import logoCEImage from './images/CE-DEV-DAY_logo.png';

import jsonp from "jsonp";

export default class MeetupDataService {

  groups = [
    {
      name: "DevDay Napoli",
      logo: logoNAImage,
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=DevDays&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=0bb82fa5e5da8fe1f5d1230e05bffbf50398bbd1"
    },
    {
      name: "DevDay Salerno",
      logo: logoNAImage,
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=devday-salerno&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=977abe081e983fe0dcb7949f0a65c243eaa73fbf"
    },
    {
      name: "DevDay Benevento",
      logo: logoNAImage,
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=devday-benevento&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=494877cff2eb7b144f5fb1bc311f7b6d78379ffe"
    },
    {
      name: "DevDay Avellino",
      logo: logoNAImage,
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=devday-avellino&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=eccce9b52999e0acc37681847e9f20434f65aaf0"
    },
    {
      name: "DevDay Caserta",
      logo: logoNAImage,
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=devday-caserta&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=ea406dab95baa6c088925931cd4c26646adfae8b"
    },
  ]

  friends = [
    {
      name: "DotNetCampania",
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=DotNetCampania&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=d437d1e5a9ffb5818db53f55df1f45096280e130"
    },
    {
      name: "CNCF Napoli",
      url: "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=cncfnapoli&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=188208760&sig=54b92c87bb3a76dffe46663091bd9ebe1ed04c94"
    }
  ]

  read (folder, item) {
    return new Promise((resolve, reject) => {
        if (folder === "upcomingEvents") {
          jsonp(item.url, null, (error, apiResult) => {
            if (apiResult.results.length > 0) {
              let itemResult = apiResult.results.map(data => {
                let isFriend = item.logo === undefined;
                return {
                  friend: isFriend,
                  id: data.id,
                  name: data && data.name + " - " + item.name,
                  location: data.venue ? data.venue.name + " - " + data.venue.address_1 : " - ",
                  url: data.event_url,
                  logo: item.logo || data.photo_url,
                  date: data.time
                }
              })[0];
              resolve(itemResult);
            }
          })
        }
      }
    );
  }

  list = async (folder) => {
    return new Promise((resolve, reject) => {
      if (folder === "upcomingEvents") {
        resolve(this.groups.concat(this.friends));
      }
    });
  }


}
