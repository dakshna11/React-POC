import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

const footer = 'Test Footer'
let wrapped = shallow(<Footer>{footer}</Footer>)

describe('Footer', ()=>{
    it('should render the Footer Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})