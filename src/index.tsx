import getGithubUser from "./github-api";

(async () => {
    const user = await getGithubUser("manuel-valles");
    document.querySelector('h1').innerText = JSON.stringify(user, null, 2);
})();