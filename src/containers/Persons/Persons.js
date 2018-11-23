import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import Person from '../../components/Person/Person';

class Persons extends Component {
    render() {
        return (
            <div>
                <Button clicked={this.props.onAddedPersonHandler}>Agregar persona</Button>
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
        onAddedPersonHandler: () => dispatch({type: 'ADD_PERSON'}),
        onDeletedPersonHandler: (idToRemove) => dispatch({type: 'REMOVE_PERSON', payload: {id: idToRemove}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);