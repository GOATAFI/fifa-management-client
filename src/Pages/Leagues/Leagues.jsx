import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/leagues')
            .then(response => response.json())
            .then(data => setLeagues(data));
    }, []);

    return (
        <div className="flex flex-wrap justify-center mt-4">
            {leagues.map(league => (
                <div key={league.Name} className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-72 flex flex-col">
                    <img className="w-full h-64 object-cover" src={league.Logo} alt={league.Name} />
                    <div className="py-4 px-6 flex-grow">
                        <h2 className="font-bold text-2xl mb-2">{league.Name}</h2>
                        <p className="text-gray-700 text-base">{league.Description}</p>
                    </div>
                    <Link to={`/${league.Name}`}><button className="btn btn-active btn-ghost self-end mb-4" >Show Details</button></Link>
                </div>
            ))}
        </div>
    );
};

export default Leagues;
