import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import List from '../components/overview/List';

import BtnGroup from '../components/util/Button_Group';
import Pagination from '../components/util/Pagination';

import { OverviewContext } from '../hooks/context/OverviewContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Overview = () => {

    const classes = useStyles();
    const { lists } = useContext(OverviewContext)

    return (
        <>
            <div className="flex"><BtnGroup /></div>
            {
                lists.length <= 0 ? <div className={classes.root}>
                    <CircularProgress size={60} />
                </div> : null
            }
            <div className="my-6">
                <List />
            </div>
            <div className="py-3">
                <Pagination />
            </div>
        </>);
}

export default Overview;

