import React, { useState, useEffect } from 'react';

const Ucl = () => {
    const [uclTable, setUclTable] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ucl')
            .then(response => response.json())
            .then(data => setUclTable(data));
    }, []);

    return (
        <div className="overflow-x-auto">
            <div className="flex flex-col items-center mt-4">
            <h1 className="text-3xl font-bold mb-4">UEFA Champions League Table</h1>
            <table className="table table-compact w-full mt-4 mb-5">
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Team</th>
                        <th>Matches Played</th>
                        <th>Win</th>
                        <th>Draw</th>
                        <th>Lost</th>
                        <th>Goals Scored</th>
                        <th>Goals Consumed</th>
                        <th>Goal Difference</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {uclTable.map(team => (
                        <tr key={team.Team}>
                            <td>{team.Ranking}</td>
                            <td>{team.Team}</td>
                            <td>{team.Matches_Played}</td>
                            <td>{team.Win}</td>
                            <td>{team.Draw}</td>
                            <td>{team.Lost}</td>
                            <td>{team.Goals_Scored}</td>
                            <td>{team.Goals_Consumed}</td>
                            <td>{team.Goal_Difference}</td>
                            <td>{team.Points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        
    );
};

export default Ucl;
