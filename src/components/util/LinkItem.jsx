import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/dist/v1';

const LinkItem = () => {

    const links = [
        {
            path: '/dashboard',
            title: 'Dashboard'
        },
        {
            path: '/overview',
            title: 'Overview'
        },
        {
            path: '/create/start?step=1',
            title: 'Create Ticket'
        }
    ]

    return (
        <ul>
            {
                links.map(link => <Link to={link.path} key={uuid()}>
                    <li className="p-2 hover:bg-blue-100 rounded-full text-center cursor-pointer">{ link.title }</li>
                </Link>)
            }
        </ul>
    );
}

export default LinkItem;