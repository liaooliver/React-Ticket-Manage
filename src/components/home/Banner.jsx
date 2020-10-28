import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../util/Button';
import ImageContainer from '../util/ImageContainer';
import image from '../../assets/images/documents.svg';

const Banner = () => {

    const history = useHistory();
    const btnClick = (e, path) => {
        history.push(path)
    }

    return (<div className="w-full p-4 bg-gray-300">
        <div className="flex justify-start items-center">
            <div className="px-4">
                <ImageContainer src={image} size="100" container="w-32" />
            </div>
            <div className="px-4">
                <section>
                    <h5 className="text-2xl">Welcome to Ticket Management System! Let's get started!</h5>
                    <p>Get started Creating the Ticket, and more function in your System.</p>
                    <p className="py-3">
                        <Button event={btnClick} color="blue" isDark={false} path="/create">Create Ticket</Button>
                    </p>
                    <p>Going to see more Tickets.</p>
                    <p className="pt-3">
                        <Button event={btnClick} color="green" isDark={false} path="/overview">GO List</Button>
                    </p>
                </section>
            </div>
        </div>
    </div>);
}

export default Banner;