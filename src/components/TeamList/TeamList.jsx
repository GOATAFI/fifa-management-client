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

  // const handleAddTeamClick = () => {
  //   navigate('/addteams');
  // };

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
    <div className="overflow-x-auto mt-5 mb-9">
      <h1 className="text-center text-4xl font-bold mb-8">Teams List</h1>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Manager</th>
            <th>Captain</th>
            <th>Net Worth</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.Name}>
              <td>
              <Link to={`/teams/${team.Name.replace(/\s+/g, '-').toLowerCase()}`}>{team.Name}</Link>
              </td>
              <td>{team.Owner}</td>
              <td>{team.Manager}</td>
              <td>{team.Captain}</td>
              <td>{team.NetWorth} Millions</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* <Link to="/addteams">
          <button className="btn btn-secondary" onClick={handleAddTeamClick}>Add Teams</button>
        </Link> */}
      </div>
    </div>
  );
}

export default TeamsList;
