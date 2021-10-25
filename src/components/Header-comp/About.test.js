import React from "react";
import { shallow } from "enzyme";
import About from "./About";

const about = 'Test About'
let wrapped = shallow(<About>{about}</About>)

describe('About', ()=>{
    it('should render the About Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})