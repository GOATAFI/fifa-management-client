// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import AddTeamForm from '../AddTeamForm/AddTeamForm';

// function TeamPage() {
//   const { teamName } = useParams();
//   const [teamData, setTeamData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:5000/teams/${teamName}`)
//       .then(response => response.json())
//       .then(data => setTeamData(data));
//   }, [teamName]);

//   const handleSearch = event => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredPlayers = teamData.filter(player => {
//     const searchRegex = new RegExp(searchTerm, 'i');
//     return (
//       searchRegex.test(player.PName) ||
//       searchRegex.test(player.Position) ||
//       searchRegex.test(player.Nationality) ||
//       searchRegex.test(player.Jersey_Num) ||
//       searchRegex.test(player.Salary) ||
//       searchRegex.test(player.Contract)
//     );
//   });

// //   const handleFormSubmit = formData => {
// //     // Submit the form data to the server or perform any necessary actions
// //     // Update the teamData state to include the new team data

// //     // Example update: add the new team data to the teamData state
// //     setTeamData(prevData => [...prevData, formData]);
// //   };

//   return (
//     <div className="overflow-x-auto mt-5 mb-9">
//       <h2 className="text-center text-4xl font-bold mb-8">Team Details</h2>
//       <div className="form-control w-96 mx-2 mb-7">
//         <input
//           type="text"
//           placeholder="Search"
//           className="input input-bordered"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <table className="table table-compact w-full">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Nationality</th>
//             <th>Jersey Number</th>
//             <th>Position</th>
//             <th>Salary</th>
//             <th>Contract</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredPlayers.map(player => (
//             <tr key={player.PName}>
//               <td>{player.PName}</td>
//               <td>{player.Age}</td>
//               <td>{player.Nationality}</td>
//               <td>{player.Jersey_Num}</td>
//               <td>{player.Position}</td>
//               <td>{player.Salary} Millions</td>
//               <td>{player.Contract}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="btn btn-secondary" onClick={() => navigate('/add-team')}>Add Team</button>
//       {/* <AddTeamForm onFormSubmit={handleFormSubmit} /> */}
//     </div>
//   );
// }

// export default TeamPage;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TeamPage() {
    const { teamName } = useParams();
    const [teamData, setTeamData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/teams/${teamName}`)
            .then(response => response.json())
            .then(data => setTeamData(data));
    }, [teamName]);
    const handleSubmit = async (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const age = form.age.value;
            const nationality = form.nationality.value;
            const position = form.position.value;
            const jersey = form.jersey.value;
            const salary = form.salary.value;
            const contract = form.contract.value;
            console.log(name, age, nationality, position, jersey, salary, contract);
            const formData = {name, age, nationality, position, jersey, salary, contract};
            try {
              // Add the new team to the database
              await fetch(`http://localhost:5000/teams/${teamName}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
              });
              navigate(`/teams/${teamName}`);
            } catch (error) {
              console.error('Error:', error);
            }
          };  
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredPlayers = teamData.filter(player => {
        const searchRegex = new RegExp(searchTerm, 'i');
        return (
            searchRegex.test(player.PName) ||
            searchRegex.test(player.Position) ||
            searchRegex.test(player.Nationality) ||
            searchRegex.test(player.Jersey_Num) ||
            searchRegex.test(player.Salary) ||
            searchRegex.test(player.Contract)
        );
    });

    // const handleFormSubmit = formData => {
    //     fetch(`http://localhost:5000/teams/${teamName}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     })
    //         .then(response => response.json())
    //         .then(updatedTeamData => {
    //             setTeamData(updatedTeamData);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

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
            {/* <AddTeamForm onFormSubmit={handleFormSubmit} /> */}
            <form onSubmit={handleSubmit} className='mt-5'>
                <input className='mt-3' type="text" name='name' placeholder='Enter name' /> <br />
                <input className='mt-3' type="number" name='age' placeholder='Enter age' /> <br />
                <input className='mt-3' type="text" name='nationality' placeholder='Enter Nationality' /> <br />
                <input className='mt-3' type="number" name='jersey' placeholder='Enter Jersey No' /> <br />
                <input className='mt-3' type="text" name='position' placeholder='Enter Position' /> <br />
                <input className='mt-3' type="number" name='salary' placeholder='Enter Salary' /> <br />
                <input className='mt-3' type="date" name='contract' placeholder='Enter Contract' /> <br />
                <input className='mt-3' type="submit" value="Submit" placeholder='Submit' />
            </form>
        </div>
    );
}

export default TeamPage;