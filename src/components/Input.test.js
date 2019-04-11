import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from './Input';
import FormControl from 'react-bootstrap/FormControl';

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps = {
    onChange: jest.fn(),
    value: "",
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Input {...props} />);
    return {
        wrapper,
        props
    };
};

describe('TEST Input', () => {

    describe('TEST Logic ', () => {

        test('TEST onChange func call when starts typing', () => {
            const event = {
                target: {value: 'red'}
            };
            const {props, wrapper} = setup();
            wrapper.find(FormControl).simulate('change', event);
            expect(props.onChange).toBeCalled();
        });
    });
});