import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from "enzyme-to-json";
import Link from './Link';

Enzyme.configure({adapter: new Adapter()});
describe('Test Link Component', () =>{
    it('should handle the click event', () => {
        window.alert = jest.fn();
       const output = shallow(<Link title="Title" url="url" />);
        output.simulate('click');

       expect(window.alert).toHaveBeenCalledWith('click on link');
    });
});
it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(
        <Link title="mockTitle" url="mockUrl" />
    );
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Кликнули по ссылке!');
});