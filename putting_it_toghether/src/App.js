import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const projectData = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "black"
    },
    {
      firstName: "John",
      lastName: "Smith", 
      age: 88,
      hairColor: "brown"
    },
  ];
  return (
    <div className="App">
      {
        projectData.map((singleProject) => (
          <PersonCard 
          firstName = { singleProject.firstName} 
          lastName = { singleProject.lastName} 
          age = { singleProject.age } 
          hairColor = { singleProject.hairColor }
          />
        ))
      }
    </div>
  );
}

export default App;
