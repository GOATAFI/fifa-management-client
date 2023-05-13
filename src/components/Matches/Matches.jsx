import React, { useState, useEffect } from 'react';

const Matches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/matches')
        .then(response => response.json())
        .then(data => setMatches(data));
    }, []);

    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-4xl font-bold mb-8">Matches</h1>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>HT Goals</th>
                        <th>AT Goals</th>
                        <th>HT YC</th>
                        <th>AT YC</th>
                        <th>HT RC</th>
                        <th>AT RC</th>
                        <th>Match Stage</th>
                        <th>League</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map(match => (
                        <tr key={match.DateTime}>
                            <td>{match.DateTime}</td>
                            <td>{match.Home_Team}</td>
                            <td>{match.Away_Team}</td>
                            <td>{match.HT_Goals}</td>
                            <td>{match.AT_Goals}</td>
                            <td>{match.HT_Yc}</td>
                            <td>{match.AT_Yc}</td>
                            <td>{match.HT_Rc}</td>
                            <td>{match.AT_Rc}</td>
                            <td>{match.Match_Stage}</td>
                            <td>{match.League}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matches;
