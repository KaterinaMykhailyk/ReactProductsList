import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Item from './Input';
import Col from 'react-bootstrap/Col';

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps = {
    product: {
        name: "red"
    },
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Item {...props} />);
    return {
        wrapper,
        props
    };
};

describe('TEST Item component', () => {
        test('Item component renders', () => {
            const { wrapper } = setup();

        });
});