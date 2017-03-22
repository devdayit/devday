import GitHub from 'github-api';

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
                    resolve(eval(result)());
                }
            });
        });
    }

    readAll(folder)
    {
        return new Promise((resolve, reject) =>
        {
            this.list(folder).then(result =>
            {
                Promise
                        .all(result.map(file => this.read(folder, file)))
                        .then(allFiles => resolve(allFiles.map(content => eval(content))))
                        .catch(reject);
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