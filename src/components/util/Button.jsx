import React from 'react';

const Button = ({ children, color, path, isDark, event }) => {
    const bgColor = `bg-${color}-500`;
    const hoverColor = `bg-${color}-600`;
    const fontColor = isDark ? 'text-black' : 'text-white'
    return (<button type="button" onClick={(e)=>event(e, path)} className={`p-2 rounded ${fontColor} ${bgColor} hover:${hoverColor}`}>{children}</button> );
}
 
export default Button;