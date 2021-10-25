import React from 'react';
import { shallow } from 'enzyme';
import About from "../Components/Header-comp/About";



let wrapped = shallow(<About></About>);
describe('About', () => {
  it('should render the About Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})