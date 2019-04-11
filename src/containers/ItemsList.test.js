import React from 'react';
import {shallow} from 'enzyme';
import {ItemsList} from './ItemsList';
import Enzyme from "enzyme/build/index";
import EnzymeAdapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps = {
    items: [],
    isFetching: false,
    searchValue: "",
    category: "All"
};

const setup = (propsOption) => {
    const props = Object.assign(defaultProps, propsOption);
    const wrapper = shallow(<ItemsList {...props} />);
    return {
        wrapper,
        props
    };
};

describe('TEST ItemsList', () => {

    describe('TEST Logic ', () => {

        test('TEST Should show loading spinner.', () => {
            const {wrapper} = setup({
                isFetching: true,
            });
            expect(wrapper.find('.spinner')).toHaveLength(1);
        });


    });
});

