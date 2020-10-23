import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CircleBtn from '../util/CircleBtn';
import Button from '../util/Button';

const CardRecent = ({ data }) => {
    
    const { title, content, index } = data;
    const history = useHistory();

    const [isHidden, setIsHidden] = useState(true);
    
    const showContent = () => setIsHidden(!isHidden);
    const btnClick = (e, path) => {
        history.push(path)
    }

    return (<li className="p-4 mb-3 shadow-md rounded-md bg-white">
        <div className="flex justify-between items-center">
            <div className="flex-grow">
                <h6 className="text-lg font-bold">{title}</h6>
            </div>
            <div className="w-10">
                <CircleBtn event={showContent}>+</CircleBtn>
            </div>
        </div>
        <div className={`transition-all duration-300 ease-linear overflow-hidden ${!isHidden ? 'inline-block mt-3' : 'h-0 mt-0'}`}>
            <p>{content}</p>
            <Button event={btnClick} color="blue" isDark={false} path={`/ticket/${index}`}>forward</Button>
        </div>
    </li>);
}

export default CardRecent;