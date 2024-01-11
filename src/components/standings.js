import React, { useState, useEffect } from 'react';
import '../App.css';

const Standings = () => {
  const [driverStandingsData, setDriverStandingsData] = useState(null);
  const [constructorStandingsData, setConstructorStandingsData] = useState(null);
  const [activeTab, setActiveTab] = useState('drivers');
  const [currentSeasonData, setCurrentSeasonData] = useState(null);

  useEffect(() => {
    // Fetch standings data from the '/api/standings' endpoint
    fetch('/api/standings')
      .then((response) => response.json()) // Parse response data as JSON
      .then((data) => {
        // Extract and format driver standings data
        const driverStandings = data.driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        const formattedDriverStandings = driverStandings.map((driver) => ({
          position: driver.position,
          driverName: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
          nationality: driver.Driver.nationality,
          constructor: driver.Constructors[0].name,
          points: driver.points,
          wins: driver.wins
        }));
        setDriverStandingsData(formattedDriverStandings);

        // Extract and format constructor standings data
        const constructorStandings = data.constructorStandings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const formattedConstructorStandings = constructorStandings.map((constructor) => ({
          position: constructor.position,
          constructorName: constructor.Constructor.name,
          nationality: constructor.Constructor.nationality,
          points: constructor.points,
          wins: constructor.wins
        }));
        setConstructorStandingsData(formattedConstructorStandings);

        // Extract and format current season data
        const currentSeasonStandings = data.driverStandings.MRData.StandingsTable.StandingsLists;
        const formattedCurrentSeasonData = currentSeasonStandings.map((season) => ({
          year: season.season,
          round: season.round,
        }));
        setCurrentSeasonData(formattedCurrentSeasonData);
      })
      .catch((error) => console.error('Error fetching standings:', error));
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const standingsData = activeTab === 'drivers' ? driverStandingsData : constructorStandingsData;

  return (
    <div className="Standings">
      <div className="Standings-buttons">
        {/* Button for switching to drivers standings */}
        <button
          className={`Standings-button ${activeTab === 'drivers' ? 'active' : ''}`}
          onClick={() => handleTabChange('drivers')}
          disabled={activeTab === 'drivers'}
        >
          Drivers
        </button>
        {/* Button for switching to constructors standings */}
        <button
          className={`Standings-button ${activeTab === 'constructors' ? 'active' : ''}`}
          onClick={() => handleTabChange('constructors')}
          disabled={activeTab === 'constructors'}
        >
          Constructors
        </button>
      </div>
      {/* Display current season data */}
      {currentSeasonData && (
        <div>
          <h3>Current Season</h3>
          <p>Year: {currentSeasonData[0].year}</p>
          <p>Round: {currentSeasonData[0].round}</p>
        </div>
      )}
      {/* Display standings table */}
      {standingsData ? (
        <table className="Standings-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>{activeTab === 'drivers' ? 'Driver' : 'Constructor'}</th>
              <th>Nationality</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((item) => (
              <tr key={item.position}>
                <td>{item.position}</td>
                <td>{activeTab === 'drivers' ? item.driverName : item.constructorName}</td>
                <td>{item.nationality}</td>
                <td>{item.points}</td>
                <td>{item.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Render a loading animation while waiting for standings data to be fetched
        <div class="loading-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      )}
    </div>
  );
};

export default Standings;
