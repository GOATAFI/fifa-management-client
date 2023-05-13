import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TeamsList() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  const handleAddTeamClick = () => {
    navigate('/addteams');
  };

  const handleDeleteTeamClick = id => {
    fetch(`http://localhost:5000/teams/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setTeams(prevTeams => prevTeams.filter(team => team.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Teams List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>League</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.league}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.draws}</td>
              <td>
                <button onClick={() => handleDeleteTeamClick(team.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/addteams">
          <button className="btn btn-secondary" onClick={handleAddTeamClick}>Add Teams</button>
        </Link>
      </div>
    </div>
  );
}

export default TeamsList;
