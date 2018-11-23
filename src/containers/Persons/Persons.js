import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import Person from '../../components/Person/Person';

class Persons extends Component {
    state = {
        persons: []
    }

    addPersonHandler = () => {
        const updatedPersonList = [...this.state.persons]
        if (updatedPersonList.length > 0) {
            updatedPersonList.push({
                id: updatedPersonList[updatedPersonList.length - 1].id + 1,
                name: 'Fernando',
                age: Math.floor(Math.random() * (65 - 18)) + 18
            })
        } else {
            updatedPersonList.push({
                id: 100,
                name: 'Fernando',
                age: Math.floor(Math.random() * (65 - 18)) + 18
            })
        }
        this.setState({persons: updatedPersonList})
    }

    deletePersonHandler = (id) => {
        let updatedPersonList = [...this.state.persons]
        updatedPersonList = updatedPersonList.filter(v => v.id !== id)
        this.setState({persons: updatedPersonList})
    }

    render() {
        return (
            <div>
                <Button clicked={this.addPersonHandler}>Agregar persona</Button>
                {this.state.persons.map(i => 
                    (<Person key={i.id} 
                        name={i.name} age={i.age} deleted={this.deletePersonHandler.bind(this, i.id)} />)
                )}
            </div>
        )
    }

}

export default Persons;