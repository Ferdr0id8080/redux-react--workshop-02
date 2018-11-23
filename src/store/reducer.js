const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_PERSON') {
        const updatedPersonList = [...state.persons]
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