import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props); 
    console.log('App constructed');
  }

  state = {
    persons: [
      { id: 1, name: 'Helo', age: 10 },
      { id: 2, name: 'World', age: 11 },  
      { id: 3, name: 'Man', age: 15 },
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('App getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('App did mount');
  }

  componentDidUpdate(){
    console.log( 'App componentDidUpdate' );
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('App shouldComponentUpdate');
    return true;
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
    console.log('App is rendered ');
    
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangeHandler}
            />;
    }

    return (
      <div className="App">
        <Cockpit 
          title={ this.props.appTitle}
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler }
          />
          {persons}
      </div>
    )
  }
}

export default App;
