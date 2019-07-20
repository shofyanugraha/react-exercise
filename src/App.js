import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Helo', age: 10 },
      { id: 2, name: 'World', age: 11 },
      { id: 3, name: 'Man', age: 15 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked!');
    // cannot do this this.state.persons[0].name = 'Satan';
    this.setState({
      persons:[
        { name: 'Helo', age: 10 },
        { name: 'World', age: 11 },
        { name: 'Man', age: 15 },
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative copy the object of person
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;


    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  render() {
    const style = {
      backgroundColoor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '1em 2em',
      marginBottom: '1em',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return (<Person 
                click={ this.deletePerson.bind(this, index) }
                name={ person.name } 
                age={ person.age }
                key={ person.id }
                changed={ (event) => this.nameChangeHandler(event, person.id) }
              />)
            })
          }
        </div>
      );
    }

    return(
      <div className="App">
        <h1>Halo Bang Bang</h1>
        <button 
          style={style}
          onClick={ this.togglePersonsHandler }>Switch</button>
        { persons }
      </div>
    );
  }
    
}

export default App;
