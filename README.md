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

