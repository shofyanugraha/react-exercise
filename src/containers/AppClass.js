import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Helo', age: 10 },
      { name: 'World', age: 11 },
      { name: 'Man', age: 15 },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked!');
    // cannot do this this.state.persons[0].name = 'Satan';
    this.setState({
      persons:[
        { name: newName, age: 10 },
        { name: 'Vebi', age: 11 },
        { name: 'Man', age: 15 },
      ]
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Halo Bang Bang</h1>
        <button onClick={ this.switchNameHandler.bind(this, 'Vebi sayang') }>Switch</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }/>
        <Person name="Jaka" age="15">My Hobbies : Racing</Person>
      </div>
    );
  }
    
}

export default App;
