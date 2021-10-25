import React from "react";
import { shallow } from "enzyme";
import Price from "./Price";

const price = 'Test Price'
let wrapped = shallow(<Price>{price}</Price>)

describe('Price', ()=>{
    it('should render the Price Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})