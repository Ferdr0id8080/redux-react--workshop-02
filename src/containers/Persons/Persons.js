import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import Person from '../../components/Person/Person';

class Persons extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (ev) => {
        this.setState({name: ev.target.value})
    } 

    ageChangedHandler = (ev) => {
        this.setState({age: ev.target.value})
    }


    addPerson = () => {
        if (this.state.name.length > 0 && this.state.age.length > 0) {
            this.props.onAddedPersonHandler(this.state.name, this.state.age)
            this.setState({
                name: '',
                age: ''
            })
        }
    }


    render() {
        return (
            <div>
                <input type='text' placeholder='Type a name' value={this.state.name} onChange={this.nameChangedHandler} />
                <input type='number' placeholder='Type an age' value={this.state.age} onChange={this.ageChangedHandler} />
                <Button clicked={this.addPerson}>Agregar persona</Button>
                {this.props.persons.map(i => 
                    (<Person key={i.id} 
                        name={i.name} age={i.age} deleted={this.props.onDeletedPersonHandler.bind(this, i.id)} />)
                )}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddedPersonHandler: (typedName, typedAge) => dispatch({type: 'ADD_PERSON', payload: {name: typedName, age: typedAge}}),
        onDeletedPersonHandler: (idToRemove) => dispatch({type: 'REMOVE_PERSON', payload: {id: idToRemove}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);