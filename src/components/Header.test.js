import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const header = 'Test Header'
let wrapped = shallow(<Header>{header}</Header>)

describe('Header', ()=>{
    it('should render the Header Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})