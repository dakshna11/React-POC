import React from 'react';
import { shallow } from 'enzyme';
import Carousel from "../Components/Header-comp/Carousel";


let wrapped = shallow(<Carousel></Carousel>);
describe('Carousel', () => {
  it('should render the Carousel Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
})