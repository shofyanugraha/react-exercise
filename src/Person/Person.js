import React from 'react';
import PersonClasses from './Person.module.css';

const Person = (props) => {
    return  (
        <div className={PersonClasses.person} >
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} </p>
            <input type="text" onChange={ props.changed } value={props.name}></input>
        </div>
    );
};

export default Person;