import React, { useContext, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import ListItem from './ListItem';

import { OverviewContext } from '../../hooks/context/OverviewContext';

const List = () => {

    const { lists, getSheet, clearList } = useContext(OverviewContext)

    useEffect(() => {
        getSheet()
        return () => {
            clearList()
        };
    }, [])


    return (
        <ul>
            {
                lists.map(list => <ListItem key={uuid()} data={list} />)
            }
        </ul>
    );
}

export default List;