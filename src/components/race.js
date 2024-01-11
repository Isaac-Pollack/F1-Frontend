import React, { useEffect, useState } from 'react';

const Race = () => {
  const [raceData, setRaceData] = useState(null);

  useEffect(() => {
    // Fetch race data from the '/api/race' endpoint
    fetch('/api/race')
      .then((response) => response.json()) // Parse response data as JSON
      .then((data) => {
        setRaceData(data); // Store the fetched race data in state
      })
      .catch((error) => {
        console.error('Error:', error); // Log any errors that occur during the fetch request
      });
  }, []);

  return (
    <div>
      {raceData ? (
        // Render race data if it is available
        <div>
          <h3>Next F1 Race</h3>
          <p>Race Name: {raceData.race.raceName}</p>
          <p>Location: {raceData.race.circuit.location}</p>
          <p>Date: {raceData.race.date}</p>
          <h3>Current Weather in {raceData.race.circuit.location}</h3>
          <p>Temperature: {raceData.weather.current.temp_c}°C</p>
          <p>Condition: {raceData.weather.current.condition.text}</p>
        </div>
      ) : (
        // Render a loading animation while waiting for race data to be fetched
        <div class="loading-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      )}
    </div>
  );
};

export default Race;
