
import React from 'react';
import '../EmployeeList.css';

const EmployeeList = ({ employees, addToTeam }) => {
  return (
    <div className="employee-list">
      <h2>Employees</h2>
      {employees.map(employee => (
        <div key={employee.id} className={`employee ${employee.disabled ? 'disabled' : ''}`}>
          <span>{employee.first_name} {employee.last_name} (Age: {employee.age})</span>
          {!employee.disabled && <button onClick={() => addToTeam(employee.id)}>ADD</button>}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
