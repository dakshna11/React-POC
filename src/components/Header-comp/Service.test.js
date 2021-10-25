import React from "react";
import { shallow } from "enzyme";
import Service from "./Service";

const service = 'Test Service'
let wrapped = shallow(<Service>{service}</Service>)

describe('Service', ()=>{
    it('should render the Service Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})