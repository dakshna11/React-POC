import React from "react";
import { shallow } from "enzyme";
import Contact from "./Contact";

const contact = 'Test Contact'
let wrapped = shallow(<Contact>{contact}</Contact>)

describe('Contact', ()=>{
    it('should render the Contact Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})