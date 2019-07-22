import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component{
    
    // static getDerivedStateFromProps(props, state){
    //     console.log('Persons getDerivedStateFromProps', props);
    //     return state;
    // }

    shouldComponentUpdate(nextProp, nextState){
        console.log('Persons shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('Persons getSnpashotBefureUpdate');
        return { message: 'snpashot updating'};
    }

    componentDidUpdate(prevProp, prevState, snapshot){
        console.log('Persons componenetDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('Persons is rendering...');
        return (
            this.props.persons.map( (person, index) => {
                return (<Person 
                click={ () => this.props.clicked( index ) }
                name={ person.name } 
                age={ person.age }
                key={ person.id }
                changed={ (event) => this.props.changed(event, person.id) }
                />);
            })
        );
    }
};

export default Persons;