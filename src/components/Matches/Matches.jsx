import React, { useState, useEffect } from 'react';

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/matches')
            .then(response => response.json())
            .then(data => setMatches(data));
    }, []);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredMatches = matches.filter(match => {
        const searchRegex = new RegExp(searchTerm, 'i');
        return (
            searchRegex.test(match.Home_Team) ||
            searchRegex.test(match.Away_Team) ||
            searchRegex.test(match.League) ||
            searchRegex.test(match.DateTime) ||
            searchRegex.test(match.Match_Stage)
        );
    });

    return (
        <div className="overflow-x-auto mt-5 mb-5">
            <div className="flex-none gap-2">
                <div>
                    <h1 className="text-center text-4xl font-bold mb-8">Matches</h1>
                </div>
                <div className="form-control w-96 mx-2 mb-7">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
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
                    {filteredMatches.map(match => (
                        <tr>
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
