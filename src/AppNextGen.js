import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Helo', age: 10 },
      { name: 'World', age: 11 },
      { name: 'Man', age: 26 },
    ]
  });

  const switchNameHandler = (newName) => {
    // console.log('Clicked!');
    // cannot do this this.state.persons[0].name = 'Satan';
    setPersonsState({
      persons:[
        { name: newName, age: 10 },
        { name: 'Vebi', age: 11 },
        { name: 'Man', age: 15 },
      ]
    })
  }

  return(
    <div className="App">
      <h1>Halo Bang Bang</h1>
      <button onClick={ switchNameHandler }>Switch</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }/>
      <Person name="Jaka" age="15">My Hobbies : Racing</Person>
    </div>
  );

    
}

export default App;
