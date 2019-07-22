import React, { Component } from 'react';
import PersonClasses from './Person.module.css';

class Person extends Component {
    render() {
        console.log('Person is rendering...');
        return  (
            <div className={PersonClasses.person} >
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} </p>
                <input type="text" onChange={ this.props.changed } value={this.props.name}></input>
            </div>
        );
    }
};

export default Person;