import React from 'react';

import PersonStyles from './Person.module.css';

const Person = props => {
    return (
        <div className={PersonStyles.Person} onClick={props.deleted}>
            <span><strong>Name:</strong> {props.name}</span>
            <span><strong>Age:</strong> {props.age}</span>
        </div>
    )
}

export default Person;