import React from 'react';
import { shallow } from 'enzyme';
import Service from "../Components/Header-comp/Service";


let wrapped = shallow(<Service></Service>);
describe('Service', () => {
  it('should render the Service Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})