import { useEffect, useState } from 'react';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/players')
      .then(response => response.json())
      .then(data => {
        setPlayers(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bordered mt-8 mb-8">
      {players.map(player => (
        <div key={player.Ranking} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className='h-64 bg-cover bg-center w-full' src={player.Image} alt={player.Name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{player.Name}</h2>
            <p>Ranking: {player.Ranking}</p>
            <p>Age: {player.Age}</p>
            <p>Nationality: {player.Nationality}</p>
            <p>Position: {player.Position}</p>
            <p>Club: {player.Club}</p>
            <p>Goals (UCL): {player.Goals_UCL}</p>
            <p>Goals (EPL): {player.Goals_EPL}</p>
            <p>Goals (LaLiga): {player.Goals_LaLiga}</p>
            <p>Total Goals: {player.Total_Goals}</p>
            <p>Yellow Cards: {player.Ycards}</p>
            <p>Red Cards: {player.Rcards}</p>
            <p>Market Value: {player.Market_Value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;
