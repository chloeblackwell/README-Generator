// using axios to get Github info
const axios = require("axios");

const api = {
    async getUser(responses) {
        try {
            let response = await axios

                .get(`https://api.github.com/users/${responses.github}`);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;
