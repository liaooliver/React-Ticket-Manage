export default (state, action) => {
    switch(action.type){
        case 'ADD_FORMDATA':
            const newState = Object.assign(state, action.payload)
            return newState
        default: return state;
    }
}