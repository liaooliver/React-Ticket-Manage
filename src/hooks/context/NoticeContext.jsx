import React, { createContext, useReducer } from 'react';
import noticeReduce from '../reduce/NoticeReduce'
export const NoticeContext = createContext();

const init = [
    {
        index: 1,
        title: 'no1 notification',
        status: 1,
        alert: false,
        deadline: '2020/10/30'
    },
    {
        index: 2,
        title: 'no2 notification',
        status: 4,
        alert: true,
        deadline: '2020/10/30'
    }
]

const NoticeContextProvider = ({children}) => {
    
    const [notices, dispatch] = useReducer(noticeReduce, init)

    function removeNotices(pos) {
        dispatch({type: 'REMOVE_NOTICE', payload: pos})
    }

    return (
        <NoticeContext.Provider value={{
            notices,
            removeNotices
        }}>
            { children }
        </NoticeContext.Provider>
    )
}
export default NoticeContextProvider