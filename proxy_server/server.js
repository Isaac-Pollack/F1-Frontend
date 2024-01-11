const express = require('express');
const axios = require("axios");

const app = express();
const cors = require('cors');
app.use(cors());

// For .MD on /api
// These lines import the necessary modules to handle markdown files.
// `fs` module is used to read files, and `{ marked }` is a markdown parser.
const fs = require('fs');
const { marked } = require('marked');

// API KEYS
const WEATHER_API_KEY = '28174c6c21cf47b7b7f125030232905&q';

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});


app.get('/api', function (req, res) {
  // Handles the GET request to '/api'
  // This endpoint reads the content of the README.md file and sends it as a response after parsing it as markdown.
  var path = __dirname + '/README.md';
  var file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
});

app.get('/api/standings', async (req, res) => {
  // Handles the GET request to '/api/standings'
  // This endpoint retrieves the current driver and constructor standings data from external APIs and combines them into a single response.
  // It uses `axios` to make asynchronous HTTP requests to the external APIs.
  // The data is processed and combined into a JSON response, or an error response is sent if an error occurs.
  try {
    const driverStandingsPromise = axios.get('http://ergast.com/api/f1/current/driverStandings.json');
    const constructorStandingsPromise = axios.get('http://ergast.com/api/f1/current/constructorStandings.json');

    //Use of Promise.all()
    const [driverStandingsResponse, constructorStandingsResponse] = await Promise.all([
      driverStandingsPromise,
      constructorStandingsPromise
    ]);

    const driverStandingsData = driverStandingsResponse.data;
    const constructorStandingsData = constructorStandingsResponse.data;

    // Process and combine the data
    res.json({ driverStandings: driverStandingsData, constructorStandings: constructorStandingsData });
  } catch (error) {
    console.error('Error fetching standings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/race', async (req, res) => {
  // Handles the GET request to '/api/race'
  // This endpoint retrieves data for the next Formula One race, including race details and current weather.
  try {
    // Retrieve data for the next F1 race
    const raceResponse = await axios.get('http://ergast.com/api/f1/current/next.json');
    const raceData = raceResponse.data.MRData.RaceTable.Races[0];

    // Extract the latitude and longitude from the race data
    const { lat, long } = raceData.Circuit.Location;

    // Retrieve current weather using the WeatherAPI
    const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${long}`);
    const weatherData = weatherResponse.data;

    // Create a modified response object with the desired data structure
    const responseData = {
      race: {
        raceName: raceData.raceName,
        circuit: {
          location: raceData.Circuit.Location.locality + ', ' + raceData.Circuit.Location.country
        },
        date: raceData.date
      },
      weather: weatherData
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/api/socials", (req, res) => {
  // Handles the GET request to '/api/socials'
  res.json({ message: "Facebook Socials coming soon!" });
});
