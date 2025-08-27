import Resolver from '@forge/resolver';
import {Octokit} from "@octokit/core";

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return 'Hello, world!';
});

async function getRepos(octokit) {
    return await octokit.request('GET /users/{username}/repos', {
        username: 'tomrowicki',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
}

resolver.define('getRepos', (req) => {
    console.log(req);
    const octokit = new Octokit({
        auth: req.payload.token
    })

    return getRepos(octokit).then(repos => {
        console.log(repos);
        return repos});
})

export const handler = resolver.getDefinitions();
