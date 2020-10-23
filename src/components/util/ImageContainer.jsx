import React from 'react';

const ImageContainer = ({ src, size, container, text, margin, alt }) => {
    return (
        <div className={`${margin} ${container} ${ text ? 'flex items-center' : null }`}>
            <img width={`${size}%`} src={src} alt={text ?　text : alt} />
            {
                text ? <h5 className="ml-4 text-xl">{text}</h5> : null
            }
        </div>
    );
}

export default ImageContainer;