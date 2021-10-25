import React from 'react';
import { shallow } from 'enzyme';
import Footer from "../Components/Footer";



let wrapped = shallow(<Footer></Footer>);
describe('Footer', () => {
  it('should render the Footer Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})