import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledAccordions({ data }) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={`${classes.root} p-3 bg-blue-100 rounded-md`} >
            {
                data && data.map((item, index) => {
                    return <Accordion key={index} expanded={expanded === `panel${item.index}`} onChange={handleChange(`panel${item.index}`)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${item.index}bh-content`} id={`panel${item.index}bh-header}`}>
                            <Typography>{ item.title }</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.content}</Typography>
                        </AccordionDetails>
                        <Divider />
                        <AccordionActions>
                            <Link to={'/'}>
                                <Button size="small" color="primary">Forward</Button>
                            </Link>
                        </AccordionActions>
                    </Accordion>
                })
            }
        </div>
    );
}