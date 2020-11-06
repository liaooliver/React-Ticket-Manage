export default (state, action) => {
    switch(action.type){
        case 'UPDATE_DATA':
            return [...state, ...action.payload]
        case 'FETCH_DATA':
            return state;
        case 'ERROR':
            return state;
        default: return state;
    }
}