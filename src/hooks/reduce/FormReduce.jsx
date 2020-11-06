export default (state, action) => {
    switch(action.type){
        case 'ADD_FORMDATA':
            const newState = Object.assign(state, action.payload)
            return newState
        case 'CLEAR_FORMDATA':
            return {
                subject: '',
                project: '',
                module: '',
                description: '',
                principal: '',
                deadline: '',
                creator: '',
                createtime: new Date()
            }
        default: return state;
    }
}