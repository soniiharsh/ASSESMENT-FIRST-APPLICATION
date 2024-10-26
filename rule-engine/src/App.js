import React, { useState } from 'react';
import ASTNode from './ASTNode'; // Import the ASTNode class
import RuleInput from './RuleInput';
import InputData from './InputData';
import ResultsDisplay from './ResultsDisplay';
import ASTViewer from './ASTViewer';

// Function to parse rules and create an AST
const parseRuleToAST = (rule) => {
  const tokens = rule.split(' ').filter(token => token !== '');
  const stack = [];

  tokens.forEach(token => {
    if (token === 'AND' || token === 'OR') {
      const right = stack.pop();
      const left = stack.pop();
      if (left && right) {
        const node = new ASTNode('operator', token, left, right);
        stack.push(node);
      }
    } else {
      const match = token.match(/(.*?)\s*(=|>|<)\s*(.*)/);
      if (match) {
        const field = match[1].trim();
        const operator = match[2].trim();
        const value = match[3].trim();

        const node = new ASTNode('operand', { field, operator, value });
        stack.push(node);
      } else {
        console.error(`Invalid token format: ${token}`);
      }
    }
  });

  return stack.pop(); // Return the root of the AST, or undefined if invalid
};

const evaluateAST = (ast, data) => {
  if (!ast) return false;

  if (ast.type === 'operand') {
    const { field, operator, value } = ast.value;
    switch (operator) {
      case '=':
        return data[field] == value; // Loose equality for simplicity
      case '>':
        return data[field] > value;
      case '<':
        return data[field] < value;
      default:
        return false;
    }
  } else if (ast.type === 'operator') {
    const leftEval = evaluateAST(ast.left, data);
    const rightEval = evaluateAST(ast.right, data);
    return ast.value === 'AND' ? leftEval && rightEval : leftEval || rightEval;
  }
};

function App() {
  const [rules, setRules] = useState([]);
  const [inputData, setInputData] = useState({});
  const [results, setResults] = useState([]);
  const [ast, setAst] = useState(null);

  const addRule = (rule) => {
    const newAst = parseRuleToAST(rule);
    if (newAst) {
      setAst(newAst);
      setRules([...rules, newAst]);
    } else {
      console.error(`Failed to parse rule: ${rule}`);
    }
  };

  const submitData = (data) => {
    setInputData(data);
    const evalResults = rules.map((rule) => evaluateAST(rule, data));
    setResults(evalResults);
  };

  return (
    <div className="App">
      <h1>Rule Engine</h1>
      <RuleInput onAddRule={addRule} />
      <InputData onSubmitData={submitData} />
      <ResultsDisplay results={results} />
      {ast && <ASTViewer ast={ast} />}
    </div>
  );
}

export default App;
