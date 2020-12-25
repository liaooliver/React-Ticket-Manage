export default (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...action.payload };
        case 'CLEAR_DATA':
            return {}
        case 'LAUNCH':
            state['status'] = "2";
            return state
        default: return state;
    }
}