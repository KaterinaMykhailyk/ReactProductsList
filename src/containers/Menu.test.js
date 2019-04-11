import React from 'react';
import {Menu} from './Menu';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Col from 'react-bootstrap/Col';

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps = {
    onSetCategory: jest.fn()
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Menu {...props} />);
    return {
        wrapper,
        props
    };
};

describe('TEST Menu', () => {

    describe('TEST Logic ', () => {

        test('TEST onClick method', () => {
            const event = {
                target: { innerText: 'All' }
            };
            const { props, wrapper } = setup();
            wrapper.find(Col).at(1).simulate('click', event);
            expect(props.onSetCategory).toBeCalled();
        });
    });
});
