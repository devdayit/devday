import GitHub from 'github-api';
import logoNAImage from './images/NA-DEV-DAY_logo.png';
import logoSAImage from './images/SA-DEV-DAY_logo.png';
import logoBNImage from './images/BN-DEV-DAY_logo.png';
import logoAVImage from './images/AV-DEV-DAY_logo.png';
import logoMAGImage from './images/MAKEAGAME.png';

export default class GitHubDataService {

    list(folder)
    {
        return new Promise((resolve, reject) =>
        {
            this.getRepository().getContents("master", `src/data/${folder}`, true, function (err, result)
            {
                if (err)
                {
                    reject(err);
                } else
                {
                    resolve(result.map(r => r.name));
                }
            });
        });
    }

    read(folder, file)
    {
        return new Promise((resolve, reject) =>
        {
            this.getRepository().getContents("master", `src/data/${folder}/${file}`, true, function (err, result)
            {
                if (err)
                {
                    reject(err);
                } else
                {
                    //this var resolves the logos inside the evalued json
                    var images = {
                        logoNA: logoNAImage,
                        logoSA: logoSAImage,
                        logoAV: logoAVImage,
                        logoBN: logoBNImage,
                        logoMAG: logoMAGImage
                    };
                    if (result.logo && typeof result.logo === "string")
                    {
                        result.logo = images[result.logo];
                    }
                    resolve(result);
                }
            });
        });
    }

    getRepository()
    {
        let github = new GitHub();
        var remoteRepo = github.getRepo('devdayit', 'devday');
        return remoteRepo;
    }

}