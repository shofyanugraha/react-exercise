import React, { useEffect } from 'react';

import AppClass from './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
       console.log('Cockpit useEffect');
       // do http request here
       
       setTimeout(() => {
           alert('Save data to cloud');
       }, 1000);
    }, [props.persons]);
    
    const classes = [];

    let  buttonClasses = '';

    if(props.showPersons){
        buttonClasses = AppClass.red;   
    }

    if (props.persons.length <= 2) {
        classes.push( AppClass.red );
    } 
    if (props.persons.length <= 1){
        classes.push( AppClass.bold );
    }

    return (
        <div className="Cockpit">
            <h1>{ props.title }</h1>
            <p className={ classes.join(' ') }>This is paragraph</p>
            <button 
            className={ buttonClasses }
            onClick={ props.clicked }>Switch</button>
        </div>
    )
};

export default Cockpit;