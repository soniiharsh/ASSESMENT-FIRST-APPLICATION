// ResultsDisplay.js
import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div>
      <h2>Evaluation Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result ? 'Rule is TRUE' : 'Rule is FALSE'}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDisplay;
