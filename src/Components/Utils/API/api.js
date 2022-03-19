const baseUrl = "https://api.github.com/users/";
let user = "";

export const API = {
    user: `${baseUrl}${user}`,
    repos: `${baseUrl}${user}/repos`,
    starred: `${baseUrl}${user}/starred`
};