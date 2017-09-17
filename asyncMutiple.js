const fetch = require('node-fetch');

async function showGitHubUser(url) {
  const response = await fetch(url);
  return await response.json();
}

async function fetchUser(handle) {
  const userPromise = showGitHubUser(`https://api.github.com/users/${handle}`);
  const repoPromise = showGitHubUser(`https://api.github.com/users/${handle}/repos`);

  const user = await userPromise;
  const repo = await repoPromise;

  console.log(user.name);
  console.log(`${repo.length}: repos`);

}

async function showUserAndRepo(handle) {
  const [user, repos] = await Promise.all([
    showGitHubUser(`https://api.github.com/users/${handle}`),
    showGitHubUser(`https://api.github.com/users/${handle}/repos`)
  ]);

  console.log(user.name);
  console.log(`${repos.length}: repos`);
}

fetchUser('anoupz');

showUserAndRepo('anoupz');