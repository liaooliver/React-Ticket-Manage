import React, { createContext, useReducer } from 'react';
import OverviewReduce from '../reduce/OverviewReduce';
import TicketReduce from '../reduce/TicketReduce';

export const OverviewContext = createContext();

const data = [];

const OverviewContextProvider = ({ children }) => {

    const [lists, listDispatch] = useReducer(OverviewReduce, data)
    const [ticket, ticketDispatch] = useReducer(TicketReduce, {
        status: 1,
        id: 'ed331f31h5',
        subject: 'SUBJECT',
        project: 'PROJECT',
        module: 'MODULE',
        creator: "CREATOR",
        createtime: '2020/02/02',
        principal: 'Oliver',
        deadline: '2020/02/06',
        description: "description",
        remainer: 19
    })

    const fetchSheet = async () => {
        if(lists.length > 0) return
        await fetch('http://localhost:3001/getSheet/all')
            .then(response => response.json())
            .then(response => {
                listDispatch({
                    type: 'UPDATE_DATA',
                    payload: response
                })
            })
            .catch(err => {
                listDispatch({ type: 'ERROR' })
            })
    }

    const fetchTicket = async (id, status) => {
        console.log(status)
        await fetch(`http://localhost:3001/getSheet/ticket/${id}?status=${status}`)
            .then(response => response.json())
            .then(response => {
                ticketDispatch({
                    type: 'FETCH_DATA',
                    payload: response
                })
            })
    }

    const getSheet = () => {
        fetchSheet()
    }

    const getTicket = (id, status) => {
        fetchTicket(id, status)
    }

    const clearTicket = () => {
        ticketDispatch({
            type: 'CLEAR_DATA'
        })
    }

    return (
        <OverviewContext.Provider value={{ lists, ticket, getSheet, getTicket, clearTicket }}>{children}</OverviewContext.Provider>
    )
}

export default OverviewContextProvider;