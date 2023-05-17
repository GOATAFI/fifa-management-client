import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TeamPage() {
  const { teamName } = useParams();
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/teams/${teamName}`)
      .then(response => response.json())
      .then(data => setTeamData(data));
  }, [teamName]);

  return (
    <div>
      <h1>Team Page: {teamName}</h1>
      <h2>Team Details:</h2>
      <ul>
        {teamData.map(player => (
          <li key={player.PName}>
            <strong>Name:</strong> {player.PName}<br />
            <strong>Age:</strong> {player.Age}<br />
            <strong>Nationality:</strong> {player.Nationality}<br />
            <strong>Jersey Number:</strong> {player.Jersey_Num}<br />
            <strong>Position:</strong> {player.Position}<br />
            <strong>Salary:</strong> {player.Salary} million<br />
            <strong>Contract:</strong> {player.Contract}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamPage;
