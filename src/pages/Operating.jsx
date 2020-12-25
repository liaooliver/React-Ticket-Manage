import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import Badge from '../components/util/Badge';
import Ticket from '../components/operating/Ticket';
import Apply from '../components/operating/Apply';
import CheckForm from '../components/operating/CheckForm';

import { OverviewContext } from '../hooks/context/OverviewContext';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles((theme) => ({
    buttonProgress: {
      color: blue[700],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }));

const Operating = () => {
    const classes = useStyles();
    const [setCode] = useState(1)
    const [ isLoading, setIsLoading ] = useState(false)
    const { ticket, getTicket, clearTicket, launchTicket, postApplyForm } = useContext(OverviewContext)
    const query = useQuery().get('id')
    const status = useQuery().get('status')
    
    useEffect(() => {
        return () => {
            clearTicket()
        }
    }, [])

    useEffect(() => {
        getTicket(query, status)
        setIsLoading(false)
    }, [query])

    const changeTicket = (id) => {
        launchTicket(id)
        setIsLoading(true)
    }

    return (
        <div className="max-w-xl mx-auto">
            {
                Object.keys(ticket).length > 0 ? <>
                    <div className="w-full flex justify-between">
                        <span>
                            <Badge code={ticket.status ? ticket.status : 0} />
                            <span className="text-sm text-gray-100 uppercase px-2 bg-green-500 rounded-md ml-2">{ticket.remainer} days</span>
                        </span>
                        <span>
                            <button className="bg-red-600 text-red-100 p-1 rounded ml-auto">Close</button>
                            {
                                ticket.status === "1" ? <button className={`${ isLoading ? 'bg-gray-400' : 'bg-blue-600' } text-green-100 p-1 rounded ml-3 relative`} onClick={() => changeTicket(ticket.id)}>
                                    Launch Ticket
                                    {
                                        isLoading ? <CircularProgress size={20} className={classes.buttonProgress} /> : null
                                    }
                                </button> : null
                            }
                        </span>
                    </div>
                    <Ticket data={ticket} />
                    {
                        ticket.status === "2" ? <Apply postApplyForm={postApplyForm} ticket={ticket} setCode={setCode} /> : null
                    }
                    {
                        ticket.status === "3" ? <><Apply setCode={setCode} /><CheckForm setCode={setCode} /></> : null
                    }
                    </>
                    : <h1>Loading...</h1>
            }
        </div>
    );
}

export default Operating;