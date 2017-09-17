const fetch = require('node-fetch');

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200)
    throw Error(body.message);

  return body;
}

async function fetchGitHubUser(handle) {
  try {
    const user = await showGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.log(`Error is : ${err.message}`);
  }
}

fetchGitHubUser('');