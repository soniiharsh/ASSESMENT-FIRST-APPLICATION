// RuleInput.js
import React, { useState } from 'react';

const RuleInput = ({ onAddRule }) => {
  const [rule, setRule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rule) {
      onAddRule(rule);
      setRule('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={rule}
        onChange={(e) => setRule(e.target.value)}
        placeholder="Enter a rule (e.g., age > 30 AND department = 'Sales')"
      />
      <button type="submit">Add Rule</button>
    </form>
  );
};

export default RuleInput;
