import React from "react";
import { shallow } from "enzyme";
import WashingPoints from "./WashingPoints";
import { screen,render } from "@testing-library/react";

let wrapped = shallow(<WashingPoints/>)

describe('WashingPoints', ()=>{
    it('should render the WashingPoints Component correctly', ()=>{
        expect(wrapped).toMatchSnapshot()
    })

    test("renders button", ()=>{
        render(<WashingPoints/>)
        expect(screen.queryByTestId('btn-WP')).toBeInTheDocument()
    })
})