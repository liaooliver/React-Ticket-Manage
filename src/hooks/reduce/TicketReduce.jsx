export default (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...action.payload };
        case 'CLEAR_DATA':
            return { }
        default: return state;
    }
}