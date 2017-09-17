const fetch = require('node-fetch');

class GithubApiClient {
  static async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  const user = await GithubApiClient.fetchUser('anoupz');
  console.log(user.name);
  console.log(user.location);
})();
