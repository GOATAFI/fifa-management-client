import { Card, Button } from 'react-daisyui';
import { useEffect, useState } from 'react';

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/players')
            .then(response => response.json())
            .then(data => {
                setPlayers(data);
                console.log(data); // <-- add this line
            });
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bordered">
            {players.map(player => (
                <Card key={player.id} className="w-full">
                    <Card.Image src={player.image_url} alt={player.name} />
                    <Card.Body className="text-center">
                        <Card.Title tag="h2">{player.name}</Card.Title>
                        <p>Team: {player.team_name}</p>
                        <p>Position: {player.position}</p>
                        <p>Age: {player.age}</p>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
export default PlayerList;
