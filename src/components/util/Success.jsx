import React from 'react';

import ImageContainer from '../util/ImageContainer';
import success from '../../assets/icons/success.png';
import LButton from '../util/LButton';

const Success = ({ style }) => {

    return (<span className="absolute" style={style}>
        <ImageContainer size='80' src={success} alt="Success" />
        <h4 className="text-center text-xl py-2">SUCCESS</h4>
        <LButton color="blue" path={'/overview'}>To List</LButton>
        <span className="w-4 inline-block"></span>
        <LButton color="teal" path={'/create/start?step=1'}>More Ticket</LButton>
    </span>);
}

export default Success;