import React from 'react';
import { shallow } from 'enzyme';
import Header from "../Components/Header";


let wrapped = shallow(<Header></Header>);
describe('Header', () => {
  it('should render the Header Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  
})
