// InputData.js
import React, { useState } from 'react';

const InputData = ({ onSubmitData }) => {
  const [data, setData] = useState({
    age: '',
    department: '',
    salary: '',
    experience: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitData(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" onChange={handleChange} />
      <input type="number" name="salary" placeholder="Salary" onChange={handleChange} />
      <input type="number" name="experience" placeholder="Experience" onChange={handleChange} />
      <button type="submit">Submit Data</button>
    </form>
  );
};

export default InputData;
