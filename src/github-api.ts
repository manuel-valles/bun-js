import axios from 'axios';

async function getGithubUser(username: string) {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
}

export default getGithubUser;