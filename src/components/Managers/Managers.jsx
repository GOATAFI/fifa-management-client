import React, { useEffect, useState } from 'react';

const Managers = () => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await fetch('http://localhost:5000/managers');
        const data = await response.json();
        setManagers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchManagers();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center text-4xl font-bold mb-8">Managers</h1>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Mid</th>
            <th>Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Club</th>
            <th>Contract</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {managers.map((manager) => (
            <tr key={manager.Mid}>
              <td>{manager.Mid}</td>
              <td>{manager.Name}</td>
              <td>{manager.Age}</td>
              <td>{manager.Nationality}</td>
              <td>{manager.Club}</td>
              <td>{manager.Contract}</td>
              <td>{manager.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Managers;
