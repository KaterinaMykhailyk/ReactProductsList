import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Input = (props) => {
    const {onChange, value, onClick} = props;
    return (
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={value} onChange={onChange} />
                    <Button variant="outline-primary" onClick={onClick}>Search</Button>
                </Form>
    )
};

export default Input;
