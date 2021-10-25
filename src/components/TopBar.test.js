import React from "react";
import { shallow } from "enzyme";
import TopBar from "./TopBar";

const topBar = 'Test TopBar'
let wrapped = shallow(<TopBar>{topBar}</TopBar>)

describe('TopBar', ()=>{
    it('should render the TopBar Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })
})