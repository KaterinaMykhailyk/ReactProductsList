import React from 'react';

const Button = (props) => {
    const {onClick} = props;
    return (
        <div className="wrapper">
            <button className="button" onClick={onClick}>Get list</button>
        </div>
    )
};

export default Button;
