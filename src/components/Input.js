import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Input = (props) => {
    const {onChange, value} = props;
    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={value} onChange={onChange}/>
        </Form>
    )
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Input;
