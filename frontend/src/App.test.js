import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
    const wrapper = shallow(<App />);

    it('expect to render Login component', () => {
        expect(wrapper.length).toEqual(1)
    })
});