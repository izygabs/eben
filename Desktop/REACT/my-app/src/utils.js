const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/timezone",
  headers: {
    "X-RapidAPI-Key": "89dd7fae42msh9894aee38ca9aaap14ec8bjsn360b2a2f6a15",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
