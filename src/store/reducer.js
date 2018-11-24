const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_PERSON') {
        const updatedPersonList = [...state.persons]
        let generatedId = null
        if (updatedPersonList.length > 0) {
            generatedId = updatedPersonList[updatedPersonList.length - 1].id + 1
        } else {
            generatedId = 100
        }

        updatedPersonList.push({
            id: generatedId,
            name: action.payload.name,
            age: action.payload.age
        })

        return {
            ...state,
            persons: updatedPersonList
        }
    } else if (action.type === 'REMOVE_PERSON') {
        let updatedPersonList = [...state.persons]
        updatedPersonList = updatedPersonList.filter(v => v.id !== action.payload.id)
        return {
            ...state,
            persons: updatedPersonList
        }
    }

    return state;
}

export default reducer;