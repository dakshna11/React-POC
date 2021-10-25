import React from 'react';
import { shallow } from 'enzyme';
import Contact from "../Components/Header-comp/Contact";



let wrapped = shallow(<Contact></Contact>);
describe('Contact', () => {
  it('should render the Contact Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})