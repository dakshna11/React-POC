import React from "react";
import { shallow } from "enzyme";
import Carousel from "./Carousel";

const carousel = 'Test Carousel'
let wrapped = shallow(<Carousel>{carousel}</Carousel>)

describe('Carousel', ()=>{
    it('should render the Carousel Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})