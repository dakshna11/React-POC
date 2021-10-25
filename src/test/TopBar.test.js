import React from 'react';
import { shallow } from 'enzyme';
import TopBar from "../Components/TopBar";



let wrapped = shallow(<TopBar></TopBar>);
describe('TopBar', () => {
  it('should render the TopBar Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})