import React from 'react';
import {Header} from './Header';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from '../components/Input';

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps = {
    onFetchProducts: jest.fn(),
    push: jest.fn(),
    onSearch: jest.fn(),
    history: {
        push: jest.fn(),
        location: {
            search: ''
        },
    },
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<Header {...props} />);
    return {
        wrapper,
        props
    };
};

describe('TEST Header', () => {

    describe('TEST Logic ', () => {

        describe('TEST component did mount', () => {

            test('TEST State should be empty on the first render', () => {
                const {wrapper} = setup();
                expect(wrapper.state().searchValue).toBe('');
            });
            test('TEST State should fetch products', () => {
                const { props } = setup();
                expect(props.onFetchProducts).toBeCalled();
            });
        });
    });
    describe('TEST onchange method ', () => {

        test('TEST Should change state and init search method when entered new search value.', () => {
            const event = {
                target: { value: 'red' }
            };
            const { props, wrapper } = setup();
            wrapper.find(Input).simulate('change', event);
            expect(props.onSearch).toBeCalled();
            expect(wrapper.state().searchValue).toBe('red');
        });
    });
});
