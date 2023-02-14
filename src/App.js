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

const destructuringExample = {
  animalType: "Dog",
  animalColor: "Brown",
  animalSound: "Woof!"
};

const contactInfo = {
  name: "John Doe",
  address: {
    street: "Church",
    country: "Canada",
    province: "Quebec"
  }
};

const people = [
  "Mark",
  "Jeff",
  "Trevor"
];

const VRGames = [
  {
    title: "Saints & Sinners",
    rating: "AAA"
  },
  {
    title: "Retribution",
    rating: "B"
  },
  {
    title: "Office Simulator",
    rating: "A"
  }
];



function App() {
  const { animalType, animalColor, animalSound } = destructuringExample;
  const { name, address } = contactInfo;
  // multi-level deep destructuring
  // address is first destructured, and then street country and province are further destructured
  const { street, country, province } = address;
  return (
    <div className="App">
      <h2>Welcome to my counter</h2>
      <Counter />
      <h2> Company Directory </h2>
      {employeeInfo.map((employee) => {
        const { firstName, lastName, age } = employee;
        return (
          <Employee firstName={firstName} lastName={lastName} age={age} />
        );
      })}

      <h2>Destructuring Example</h2>
      <h4>{`A ${animalType} is ${animalColor} and goes ${animalSound}`}</h4>
      <h4>{`${name} lives on ${street} street which is in the province of ${province}, in the country of ${country}`}</h4>

      <h2>Aliasing</h2>
      <p>If you have the same property twice you can alias one of them by using a colon character. A common example of this would be more than one thing named id. One becomes id: animalId, the other becomes id: humanId.</p>

      <h2>More Complex Use Cases</h2>
      <h6>They shorten your code but may make it much less readable</h6>
      <p>Destructuring in place.</p>

      <h2>Mapping & Looping</h2>
      {people.map((people) => {
        return <h3>{people}</h3>;
      })}
      <p>
        If all your function is doing is returning something then you can omit the return statement and the curly braces.
      </p>
      {people.map((people) => (
        <h4>{people}</h4>
      ))}

      <p>
        Now an array of objects instead of just an array of strings...
      </p>
      {people.map((people) => (
        <h4>{people}</h4>
      ))}


    </div>
  );
}

export default App;
