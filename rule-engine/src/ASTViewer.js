// ASTViewer.js
import React from 'react';

const ASTViewer = ({ ast }) => {
  const renderAST = (node) => {
    if (!node) return null;
    return (
      <div>
        <span>{node.type}: {JSON.stringify(node.value)}</span>
        <div style={{ marginLeft: '20px' }}>
          {renderAST(node.left)}
          {renderAST(node.right)}
        </div>
      </div>
    );
  };

  return <div>{renderAST(ast)}</div>;
};

export default ASTViewer;
