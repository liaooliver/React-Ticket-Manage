import React from 'react';
import { useHistory } from 'react-router-dom';

const LButton = ({ children, color, path, isDark }) => {

    const history = useHistory();
    const btnClick = (e, path) => {
        e.preventDefault();
        history.push(path)
    }

    const bgColor = `bg-${color}-500`;
    const hoverColor = `bg-${color}-600`;
    const fontColor = isDark ? 'text-black' : 'text-white'
    return (<button type="button" onClick={(e)=>btnClick(e, path)} className={`p-2 rounded ${fontColor} ${bgColor} hover:${hoverColor}`}>{children}</button> );
}
// Link-Button
export default LButton;