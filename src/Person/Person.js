import React from 'react';
import './Person.css';

const Person = (props) => {
    return  (
        <div className="Person" >
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} </p>
            <input type="text" onChange={ props.changed } value={props.name}></input>
        </div>
    );
};

export default Person;