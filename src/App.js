import React from 'react';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: 24
  },
  {
    firstName: "Mark",
    lastName: "Taylor",
    age: 24
  },
  {
    firstName: "Craig",
    lastName: "Jones",
    age: 24
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my counter</h2>
        <Counter />
        <h2> Company Directory </h2>
        {employeeInfo.map((employee) => {
          const { firstName, lastName, age } = employee;
          return (
            <Employee firstName={firstName} lastName={lastName} age={age} />
          );
        })
        }



        {/* <Employee firstName="Jack" lastName="Smith" />
        <Employee firstName="Stef" lastName="Cole" />
        <Employee firstName="George" lastName="Plant" />
        <Employee firstName="Tom" lastName="Jones" /> */}
      </header>
    </div>
  );
}

export default App;
