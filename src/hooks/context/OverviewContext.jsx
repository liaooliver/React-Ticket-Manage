import React, { createContext, useReducer } from 'react';
import OverviewReduce from '../reduce/OverviewReduce';
import TicketReduce from '../reduce/TicketReduce';

export const OverviewContext = createContext();

const data = [];

const OverviewContextProvider = ({ children }) => {

    const [lists, listDispatch] = useReducer(OverviewReduce, data)
    const [ticket, ticketDispatch] = useReducer(TicketReduce, {})

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

    const fetchTicket = async (id) => {
        await fetch(`http://localhost:3001/getSheet/ticket/${id}`)
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

    const getTicket = (id) => {
        fetchTicket(id)
    }

    return (
        <OverviewContext.Provider value={{ lists, ticket, getSheet, getTicket }}>{children}</OverviewContext.Provider>
    )
}

export default OverviewContextProvider;