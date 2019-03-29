import React from 'react';

const Input = (props) => {
    const {onChange, value, onKeyPress} = props;
    console.log(props);
    return (
        <div className="wrapper">
            <input type="text" className="input" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        </div>
    )
};

export default Input;
