import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TeamPage() {
  const { teamName } = useParams();
  const [teamData, setTeamData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/teams/${teamName}`)
      .then(response => response.json())
      .then(data => setTeamData(data));
  }, [teamName]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPlayers = teamData.filter(player => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return (
      searchRegex.test(player.PName) ||
      searchRegex.test(player.Position) ||
      searchRegex.test(player.Age) ||
      searchRegex.test(player.Nationality) ||
      searchRegex.test(player.Jersey_Num) ||
      searchRegex.test(player.Salary) ||
      searchRegex.test(player.Contract)
    );
  });

  return (
    <div className="overflow-x-auto mt-5 mb-9">
      <h2 className="text-center text-4xl font-bold mb-8">Team Details</h2>
      <div className="form-control w-96 mx-2 mb-7">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Jersey Number</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Contract</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map(player => (
            <tr key={player.PName}>
              <td>{player.PName}</td>
              <td>{player.Age}</td>
              <td>{player.Nationality}</td>
              <td>{player.Jersey_Num}</td>
              <td>{player.Position}</td>
              <td>{player.Salary} Millions</td>
              <td>{player.Contract}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamPage;
