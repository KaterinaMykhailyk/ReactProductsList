import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});
const setup = ((props={}) => {
    return shallow (<App {...props} />)
})();

test('renders without error', () => {
    const appComponent = setup.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
});

test('renders header component', () => {
    const header = setup.find("[data-test='component-header']");
    expect(header.length).toBe(1);
});

test('renders menu component', () => {
    const menu = setup.find("[data-test='component-menu']");
    expect(menu.length).toBe(1);
});

test('renders itemslist component', () => {
    const itemsList = setup.find("[data-test='component-items-list']");
    expect(itemsList.length).toBe(1);
});