import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Larnell"} lastName={"Lewis"} age={39} hairColor={"black"}/>
      <PersonCard firstName={"John"} lastName={"Frusciante"} age={53} hairColor={"brown"}/>
      <PersonCard firstName={"Stephen Lee"} lastName={"Bruner"} age={38} hairColor={"blonde"}/>
      <PersonCard firstName={"Moses"} lastName={"Sumney"} age={30} hairColor={"black"}/>
    </div>
  );
}

export default App;
