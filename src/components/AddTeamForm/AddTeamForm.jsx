// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AddTeamForm() {
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     league: '',
//     wins: '',
//     losses: '',
//     draws: ''
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Add the new team to the database
//       await fetch('http://localhost:5000/teams', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       // Navigate back to the TeamsList page
//       navigate('/teams');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };  

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <div>
//       <h2>Add Team</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="id">ID:</label>
//           <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="league">League:</label>
//           <input type="text" id="league" name="league" value={formData.league} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="wins">Wins:</label>
//           <input type="text" id="wins" name="wins" value={formData.wins} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="losses">Losses:</label>
//           <input type="text" id="losses" name="losses" value={formData.losses} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="draws">Draws:</label>
//           <input type="text" id="draws" name="draws" value={formData.draws} onChange={handleChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddTeamForm;

// import React, { useState } from 'react';

// const AddTeamForm = ({ onFormSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     owner: '',
//     manager: '',
//     captain: '',
//     netWorth: '',
//   });

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     onFormSubmit(formData);
//     setFormData({
//       name: '',
//       owner: '',
//       manager: '',
//       captain: '',
//       netWorth: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="owner">Owner:</label>
//         <input
//           type="text"
//           id="owner"
//           name="owner"
//           value={formData.owner}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="manager">Manager:</label>
//         <input
//           type="text"
//           id="manager"
//           name="manager"
//           value={formData.manager}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="captain">Captain:</label>
//         <input
//           type="text"
//           id="captain"
//           name="captain"
//           value={formData.captain}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="netWorth">Net Worth:</label>
//         <input
//           type="text"
//           id="netWorth"
//           name="netWorth"
//           value={formData.netWorth}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddTeamForm;




