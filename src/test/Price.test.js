import React from 'react';
import { shallow } from 'enzyme';
import Price from "../Components/Header-comp/Price";


let wrapped = shallow(<Price></Price>);
describe('Price', () => {
  it('should render the Price Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})