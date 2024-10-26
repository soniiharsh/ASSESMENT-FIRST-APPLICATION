# Rule Engine with AST

A React-based 3-tier rule engine application designed to determine user eligibility based on attributes such as age, department, income, and spending. The system utilizes an Abstract Syntax Tree (AST) to represent conditional rules, allowing for dynamic creation, combination, and modification of these rules.

## Objective

Develop a simple rule engine that evaluates user eligibility based on defined rules, utilizing an AST for efficient rule management.

## Features

- **Dynamic Rule Creation**: Users can define rules using a simple syntax.
- **Rule Combination**: Combine multiple rules into a single AST.
- **Eligibility Evaluation**: Evaluate rules against user attributes to determine eligibility.
- **Error Handling**: Graceful handling of invalid rule strings or data formats.

## Data Structure

The AST is represented using a data structure as follows:

- **Node**: Represents each element of the AST.
  - **type**: String indicating the node type ("operator" for AND/OR, "operand" for conditions).
  - **left**: Reference to the left child node.
  - **right**: Reference to the right child node (for operators).
  - **value**: Optional value for operand nodes (e.g., number for comparisons).

## Data Storage

- **Database**: [Specify your choice of database, e.g., MongoDB, PostgreSQL]
- **Schema**: Define a schema for storing rules and application metadata. 
  - **Example**:
    ```json
    {
      "rules": [
        {
          "id": "1",
          "rule_string": "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)",
          "created_at": "2023-01-01T00:00:00Z"
        }
      ]
    }
    ```

## API Design

1. **create_rule(rule_string)**: Converts a string representation of a rule into a Node object representing the corresponding AST.
2. **combine_rules(rules)**: Combines a list of rule strings into a single AST, optimizing for efficiency and minimizing redundant checks.
3. **evaluate_rule(JSON data)**: Evaluates the combined AST against provided attribute data and returns `True` or `False` based on eligibility.

## Sample Rules

- **Rule 1**: 
((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)

- **Rule 2**: 
((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)

## Testing

### Test Cases

1. Create individual rules using `create_rule` and verify their AST representation.
2. Combine example rules with `combine_rules` and ensure the resulting AST reflects the correct logic.
3. Use sample JSON data to test `evaluate_rule` under various scenarios.
4. Explore combining additional rules and verify functionality.

## Bonus Features

- **Error Handling**: Implement checks for invalid rule strings or data formats.
- **Attribute Validation**: Ensure attributes are valid and part of a defined catalog.
- **Rule Modification**: Allow modification of existing rules through the API.
- **User-defined Functions**: Consider extending the rule language to support user-defined functions for advanced conditions.

## Technologies Used

- **Frontend**: React
- **Backend**: [Specify backend technology, e.g., Node.js]
- **Data Source**: [Specify your database or data storage]

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. Clone the repository:
 ```bash
 git clone https://github.com/soniiharsh/ASSESMENT-FIRST-APPLICATION.git
```
2.Navigate to the project directory:
 ```bash
 cd Weather2/rule-engine-app
```
4.Install dependencies:
 ```bash
npm install
# or
yarn install
```
7. Start
```bash
npm start
```
Feel free to make any adjustments or additions as needed! If you have more questions or need further help, just let me know!


