import React from 'react';

import LButton from '../util/LButton';
import ImageContainer from '../util/ImageContainer';
import image from '../../assets/images/documents.svg';

const Banner = () => {
    return (<div className="w-full p-4 bg-gray-200">
        <div className="flex justify-start items-center">
            <div className="px-4">
                <ImageContainer src={image} size="100" container="w-32" />
            </div>
            <div className="px-4">
                <section>
                    <h5 className="text-2xl">Welcome to Ticket Management System! Let's get started!</h5>
                    <p>Get started Creating the Ticket, and more function in your System.</p>
                    <p className="py-3">
                        <LButton color="blue" isDark={false} path="/create/start?step=1">Create Ticket</LButton>
                    </p>
                    <p>Going to see more Tickets.</p>
                    <p className="pt-3">
                        <LButton color="green" isDark={false} path="/overview">GO List</LButton>
                    </p>
                </section>
            </div>
        </div>
    </div>);
}

export default Banner;