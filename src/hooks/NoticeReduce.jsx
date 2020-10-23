export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_NOTICE':
            state.splice(action.payload, 1);
            return [...state];
        default: return state;
    }
}