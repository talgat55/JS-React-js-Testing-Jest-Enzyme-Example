import React from 'react';
import Enzyme, {shallow,simular} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestComponent from './TestComponent';

Enzyme.configure({adapter: new Adapter});

describe(' TestComponent', () => {
    it('should  show text', () => {
        const wrapper = shallow(<TestComponent/>);
        const text = wrapper.find('div');
        expect(text.text()).toBe('Text goes here');
    });

    it('should hide text when button is clicked', () => {
        const wrapper = shallow(<TestComponent/>);
        const button = wrapper.find('button');
        button.simulate('click');
        const text = wrapper.find('div');
        expect(text.length).toBe(0);
    })

});