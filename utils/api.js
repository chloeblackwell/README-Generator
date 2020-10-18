// using axios to get Github info
const axios = require("axios");

function apiCall(responses) {
    const queryURL = `https://api.github.com/users/${responses.github}`;

    return axios
        .get(queryURL)
        .then(function (res) {
            console.log(res);
            const result = {
                name: res.data.name,
                avatar_url: (res.data.avatar_url) ? res.data.avatar_url : "placeholder@sth.com"
            };
            return result;
        })

}

module.exports = apiCall;